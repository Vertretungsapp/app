import 'dart:convert';

import 'package:vertretungsapp/api/fetch.dart';
import 'package:vertretungsapp/api/session.dart';
import 'package:xml2json/xml2json.dart';

const baseDomain = 'stundenplan24.de';

/// Tests the given credentials by getting the vpinfok.txt.
///
/// Returns the HTTP status code of the response.
Future<int> testCredentials(Credentials credentials) {
  return fetch("https://$baseDomain/${credentials.schoolnumber}/mobil/mobdaten/vpinfok.txt", credentials).then((value) => value.statusCode);
}

Future<Map<String, dynamic>> fetchStundenplan24(Credentials credentials, [DateTime? date]) {
  final x2j = Xml2Json();
  return fetch("https://$baseDomain/${credentials.schoolnumber}/mobil/mobdaten/${_getFileName(date)}", credentials).then((value) {
    x2j.parse(utf8.decode(value.bodyBytes));
    Map<String, dynamic> json = jsonDecode(x2j.toParkerWithAttrs());
    return json;
  }).catchError((e) {
    throw Exception("Failed to load plan: $e");
  });
}

String _getFileName([DateTime? date]) {
  if (date != null) {
    return "PlanKl${date.year}${date.month.toString().padLeft(2, '0')}${date.day.toString().padLeft(2, '0')}.xml";
  } else {
    return "Klassen.xml";
  }
}
