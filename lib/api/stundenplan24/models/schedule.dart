import 'package:vertretungsapp_flutter/api/stundenplan24/models/scheduled_lesson.dart';

enum ScheduleType { schoolClass, room }

class Schedule {
  final String short;
  final List<ScheduledLesson> schedule;
  final ScheduleType type;

  Schedule(this.short, this.schedule, this.type);
}
