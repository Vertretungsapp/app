import 'package:vertretungsapp/api/stundenplan24/models/scheduled_lesson.dart';

enum ScheduleType { schoolClass, room }

class Schedule {
  final String short;
  final List<ScheduledLesson> schedule;
  final ScheduleType type;

  Schedule(this.short, this.schedule, this.type);

  Schedule.fromJson(dynamic json)
      : short = json['short'],
        schedule = json['schedule'],
        type = ScheduleType.values.firstWhere((element) => element.name == json['type']);

  Map<String, dynamic> toJson() => {'short': short, 'schedule': schedule, 'type': type.name};
}
