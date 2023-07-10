import 'dart:core';
import 'package:dart_date/dart_date.dart';
import 'package:vertretungsapp_flutter/api/stundenplan24/models/school_class.dart';
import 'package:vertretungsapp_flutter/api/stundenplan24/parsing_tools.dart';

class Plan {
  final String schoolnumber;
  final DateTime lastUpdated;
  final DateTime date;
  final int week;

  final List<DateTime> holidays;
  final List<String> info;

  List<SchoolClass> classes = [];

  Plan(this.schoolnumber, this.lastUpdated, this.date, this.week, this.holidays,
      this.info);

  Plan.fromJson(String snum, Map<String, dynamic> json)
      : schoolnumber = snum,
        lastUpdated = Date.parse(json['Kopf']['zeitstempel'],
            pattern: "dd.MM.y, HH:mm", locale: "de_DE"),
        date = Date.parse(json['Kopf']['DatumPlan'],
            pattern: "EEEE, dd. MMMM y", locale: "de_DE"),
        holidays = _parseHolidays(json['FreieTage']['ft']),
        week = int.parse(json['Kopf']['woche']),
        info = parseStringOrListToList(json['ZusatzInfo']['ZiZeile']),
        classes = parseArrayOrObjectFromJson<SchoolClass>(
            json['Klassen']['Kl'], SchoolClass.fromJson);
}

List<DateTime> _parseHolidays(List<dynamic> holidays) {
  List<DateTime> result = [];
  for (var holiday in holidays) {
    final parsedHoliday =
        "20${holiday.substring(0, 2)}-${holiday.substring(2, 4)}-${holiday.substring(4, 6)}"
            .split("-");
    result.add(DateTime(int.parse(parsedHoliday[0]),
        int.parse(parsedHoliday[1]), int.parse(parsedHoliday[2])));
  }
  return result;
}
