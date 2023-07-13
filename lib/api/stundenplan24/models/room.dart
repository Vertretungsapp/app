import 'package:vertretungsapp/api/stundenplan24/models/schedule.dart';
import 'package:vertretungsapp/api/stundenplan24/models/scheduled_lesson.dart';

class Room extends Schedule {
  Room(String short) : super(short, [], ScheduleType.room);

  Room.fromJson(dynamic json)
      : super(json['short'], List<ScheduledLesson>.from(json['schedule'].map((e) => ScheduledLesson.fromJson(e))),
            ScheduleType.values.firstWhere((element) => element.name == json['type']));

  @override
  Map<String, dynamic> toJson() => {'short': short, 'schedule': schedule, 'type': type.name};
}
