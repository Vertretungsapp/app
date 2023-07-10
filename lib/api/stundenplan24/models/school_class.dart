import 'package:vertretungsapp_flutter/api/stundenplan24/models/lesson.dart';
import 'package:vertretungsapp_flutter/api/stundenplan24/models/schedule.dart';
import 'package:vertretungsapp_flutter/api/stundenplan24/models/scheduled_lesson.dart';
import 'package:vertretungsapp_flutter/api/stundenplan24/parsing_tools.dart';

class SchoolClass extends Schedule {
  List<Lesson> lessons = [];

  SchoolClass(String short) : super(short, [], ScheduleType.schoolClass);

  SchoolClass.fromJson(dynamic json)
      : lessons = json['Unterricht'] != ""
            ? parseArrayOrObjectFromJson<Lesson>(
                json['Unterricht']['Ue'], Lesson.fromJson)
            : [],
        super(
            json['Kurz'],
            json['Pl'] != ""
                ? parseArrayOrObjectFromJson<ScheduledLesson>(
                    json['Pl']['Std'], ScheduledLesson.fromJson)
                : [],
            ScheduleType.schoolClass);
}
