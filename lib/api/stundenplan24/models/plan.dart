import 'dart:core';

import 'package:dart_date/dart_date.dart';
import 'package:vertretungsapp/api/stundenplan24/models/room.dart';
import 'package:vertretungsapp/api/stundenplan24/models/school_class.dart';
import 'package:vertretungsapp/api/stundenplan24/parsing_tools.dart';

class Plan {
  final String schoolnumber;
  final DateTime lastUpdated;
  final DateTime date;
  final int week;

  final List<DateTime> holidays;
  final List<String> info;

  List<SchoolClass> classes = [];
  List<Room> rooms = [];

  Plan(this.schoolnumber, this.lastUpdated, this.date, this.week, this.holidays, this.info);

  Plan.parseXMLJson(String snum, Map<String, dynamic> json)
      : schoolnumber = snum,
        lastUpdated = Date.parse(json['Kopf']['zeitstempel'], pattern: "dd.MM.y, HH:mm", locale: "de_DE"),
        date = Date.parse(json['Kopf']['DatumPlan'], pattern: "EEEE, dd. MMMM y", locale: "de_DE"),
        holidays = _parseHolidays(json['FreieTage']['ft']),
        week = int.parse(json['Kopf']['woche']),
        info = json['ZusatzInfo'] != null ? parseStringOrListToList(json['ZusatzInfo']['ZiZeile']) : [],
        classes = parseArrayOrObjectFromJson<SchoolClass>(json['Klassen']['Kl'], SchoolClass.parseXMLJson) {
    generateRooms();
  }

  Plan.fromJson(dynamic json)
      : schoolnumber = json['schoolnumber'],
        lastUpdated = DateTime.parse(json['lastUpdated']),
        date = DateTime.parse(json['date']),
        week = json['week'],
        holidays = List<DateTime>.from(json['holidays'].map((x) => DateTime.parse(x))),
        info = List<String>.from(json['info'].map((x) => x)),
        classes = List<SchoolClass>.from(json['classes'].map((x) => SchoolClass.fromJson(x))) {
    generateRooms();
  }

  Map<String, dynamic> toJson() => {
        'schoolnumber': schoolnumber,
        'lastUpdated': lastUpdated.toIso8601String(),
        'date': date.toIso8601String(),
        'week': week,
        'holidays': holidays.map((e) => e.toIso8601String()).toList(),
        'info': info,
        'classes': classes
      };

  static empty() {
    return Plan("", DateTime.now(), DateTime.now(), 0, [], []);
  }

  bool isEmpty() {
    return schoolnumber.isEmpty;
  }

  void generateRooms() {
    for (var schoolClass in classes) {
      for (var scheduledLesson in schoolClass.schedule) {
        if (scheduledLesson.room.value.isEmpty) continue;
        scheduledLesson.classShort = schoolClass.short; // A bit hacky, but it works
        if (!rooms.any((element) => element.short == scheduledLesson.room.value)) {
          var room = Room(scheduledLesson.room.value);
          room.schedule.add(scheduledLesson);
          rooms.add(room);
        } else {
          rooms.firstWhere((element) => element.short == scheduledLesson.room.value).schedule.add(scheduledLesson);
        }
      }
    }

    for (var room in rooms) {
      room.schedule.sort((a, b) => a.lessonNumber.compareTo(b.lessonNumber));
    }

    rooms.sort((a, b) => a.short.compareTo(b.short));
  }
}

List<DateTime> _parseHolidays(List<dynamic> holidays) {
  List<DateTime> result = [];
  for (var holiday in holidays) {
    final parsedHoliday = "20${holiday.substring(0, 2)}-${holiday.substring(2, 4)}-${holiday.substring(4, 6)}".split("-");
    result.add(DateTime(int.parse(parsedHoliday[0]), int.parse(parsedHoliday[1]), int.parse(parsedHoliday[2])));
  }
  return result;
}
