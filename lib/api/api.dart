import 'package:vertretungsapp/api/cache.dart';
import 'package:vertretungsapp/api/session.dart';
import 'package:vertretungsapp/api/stundenplan24/models/plan.dart';
import 'package:vertretungsapp/api/stundenplan24/stundenplan24.dart';

Future<Plan> getPlan([bool ignoreCache = false, DateTime? date]) {
  return getCredentials().then((value) async {
    final cachedPlan = cache.getPlan(value.schoolnumber, date);
    if (cachedPlan != null && !ignoreCache) {
      return cachedPlan;
    }

    final plan = Plan.parseXMLJson(
        value.schoolnumber, (await fetchStundenplan24(value, date))['VpMobil']);
    cache.addPlan(plan);
    return plan;
  });
}
