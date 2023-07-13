import 'package:vertretungsapp/api/stundenplan24/models/lesson.dart';
import 'package:vertretungsapp/api/stundenplan24/models/schedule.dart';
import 'package:vertretungsapp/api/stundenplan24/models/scheduled_lesson.dart';
import 'package:vertretungsapp/api/stundenplan24/parsing_tools.dart';

class SchoolClass extends Schedule {
  List<Lesson> lessons = [];

  SchoolClass(String short) : super(short, [], ScheduleType.schoolClass);

  SchoolClass.parseXMLJson(dynamic json)
      : lessons = json['Unterricht'] != "" ? parseArrayOrObjectFromJson<Lesson>(json['Unterricht']['Ue'], Lesson.parseXMLJson) : [],
        super(json['Kurz'], json['Pl'] != "" ? parseArrayOrObjectFromJson<ScheduledLesson>(json['Pl']['Std'], ScheduledLesson.parseXMLJson) : [],
            ScheduleType.schoolClass);

  SchoolClass.fromJson(dynamic json)
      : lessons = List<Lesson>.from(json['lessons'].map((e) => Lesson.fromJson(e))),
        super(json['short'], List<ScheduledLesson>.from(json['schedule'].map((e) => ScheduledLesson.fromJson(e))),
            ScheduleType.values.firstWhere((element) => element.name == json['type']));

  @override
  Map<String, dynamic> toJson() => {'lessons': lessons, 'short': short, 'schedule': schedule, 'type': type.name};
}
