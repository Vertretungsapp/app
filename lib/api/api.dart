import 'package:vertretungsapp/api/session.dart';
import 'package:vertretungsapp/api/stundenplan24/models/plan.dart';
import 'package:vertretungsapp/api/stundenplan24/stundenplan24.dart';

Future<Plan> getPlan([bool ignoreCache = false, DateTime? date]) {
  return getCredentials().then((value) async {
    // TODO: Caching implementation
    return Plan.fromJson(value.schoolnumber, (await fetchStundenplan24(value, date))['VpMobil']);
  });
}
