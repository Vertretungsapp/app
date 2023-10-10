import 'dart:convert';

import 'package:hive_flutter/hive_flutter.dart';
import 'package:vertretungsapp/api/stundenplan24/models/schedule.dart';

FilterManager filterManager = FilterManager();

class Filter {
  final String short;
  final ScheduleType type;
  final List<String> lessons;
  final String schoolnumber;

  const Filter(
      {required this.short,
      required this.type,
      required this.lessons,
      required this.schoolnumber});

  Filter.fromJson(Map<String, dynamic> json)
      : short = json["short"],
        type = ScheduleType.values[json["type"]],
        lessons = List<String>.from(json["lessons"]),
        schoolnumber = json["schoolnumber"];

  Map<String, dynamic> toJson() => {
        "short": short,
        "type": type.index,
        "lessons": List<dynamic>.from(lessons.map((x) => x)),
        "schoolnumber": schoolnumber,
      };

  void addLesson(String lesson) {
    lessons.add(lesson);
  }

  void removeLesson(String lesson) {
    lessons.remove(lesson);
  }

  bool containsLesson(String lesson) {
    return lessons.contains(lesson);
  }
}

class FilterManager {
  Map<String, List<Filter>> filters = {};
  late Box<String> filterBox;

  FilterManager();

  FilterManager.fromJson(Map<String, dynamic> json)
      : filters = json.map((key, value) => MapEntry(key,
            List<Filter>.from(value.map((x) => Filter.fromJson(x)).toList())));

  Map<String, dynamic> toJson() => filters.map((key, value) =>
      MapEntry(key, List<dynamic>.from(value.map((x) => x.toJson()))));

  Future<void> initFilterManager() async {
    filterBox = await Hive.openBox<String>("filter");
    readFromDisk();
    return;
  }

  FilterManager readFromDisk() {
    final json = filterBox.get("cache");
    filters = json != null && json != "{}"
        ? FilterManager.fromJson(jsonDecode(json)).filters
        : FilterManager().filters;
    return this;
  }

  FilterManager writeToDisk() {
    filterBox.put("cache", jsonEncode(toJson()));
    return this;
  }

  void add(Filter filter) {
    filters.putIfAbsent(filter.schoolnumber, () => []).add(filter);
    writeToDisk();
  }

  void remove(Filter filter) {
    filters.putIfAbsent(filter.schoolnumber, () => []).remove(filter);
    writeToDisk();
  }

  bool contains(String schoolnumber, String short) {
    return filters[schoolnumber] != null &&
        filters[schoolnumber]!.any((element) => element.short == short);
  }

  Filter getFilter(String schoolnumber, String short) {
    if (!contains(schoolnumber, short)) {
      add(_createEmptyFilter(schoolnumber, short, ScheduleType.schoolClass));
    }
    return filters[schoolnumber]!
        .firstWhere((element) => element.short == short);
  }

  Filter _createEmptyFilter(
      String schoolnumber, String short, ScheduleType type) {
    return Filter(
        short: short, type: type, lessons: [], schoolnumber: schoolnumber);
  }
}
