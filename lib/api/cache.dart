import 'dart:convert';

import 'package:hive_flutter/hive_flutter.dart';
import 'package:vertretungsapp/api/stundenplan24/models/plan.dart';

Cache cache = Cache();

class Cache {
  Map<String, List<Plan>> cache = {};
  late Box<String> cacheBox;

  Cache();

  Cache.fromJson(Map<String, dynamic> json) : cache = json.map((key, value) => MapEntry(key, List<Plan>.from(value.map((x) => Plan.fromJson(x)))));

  Map<String, dynamic> toJson() => cache.map((key, value) => MapEntry(key, List<dynamic>.from(value.map((x) => x.toJson()))));

  Future<void> initCache() async {
    cacheBox = await Hive.openBox<String>("cache");
    readFromDisk();
    cleanup();
    return;
  }

  Cache readFromDisk() {
    final json = cacheBox.get("cache");
    cache = json != null && json != "{}" ? Cache.fromJson(jsonDecode(json)).cache : Cache().cache;
    return this;
  }

  Cache writeToDisk() {
    cacheBox.put("cache", jsonEncode(cache));
    return this;
  }

  Cache cleanup() {
    final now = DateTime.now().subtract(const Duration(days: 14));
    cache.forEach((key, value) => cache[key] = value.where((element) => element.date.isAfter(now)).toList());
    return writeToDisk();
  }

  List<Plan> getPlans(String schoolnumber) {
    return cache[schoolnumber] ?? [];
  }

  Plan? getPlan(String schoolnumber, [DateTime? date]) {
    if (date == null) {
      var plans = getPlans(schoolnumber);
      return plans.isNotEmpty ? plans.first : null;
    }

    var cached = getPlans(schoolnumber).firstWhere((element) => element.date == date, orElse: () => Plan.empty());
    if (cached.isEmpty()) {
      return null;
    }
    return cached;
  }

  Cache addPlan(Plan plan) {
    if (cache[plan.schoolnumber] == null) cache[plan.schoolnumber] = [];
    cache[plan.schoolnumber]!.removeWhere((element) => element.date == plan.date);
    cache[plan.schoolnumber]!.add(plan);
    return writeToDisk();
  }

  Cache removePlan(Plan plan) {
    if (cache[plan.schoolnumber] == null) return this;
    cache[plan.schoolnumber]!.removeWhere((element) => element.date == plan.date);
    return writeToDisk();
  }

  void clear() {
    cache = {};
    writeToDisk();
  }
}
