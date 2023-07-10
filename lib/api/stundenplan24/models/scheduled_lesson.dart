import 'package:vertretungsapp_flutter/api/stundenplan24/models/changeable.dart';

class ScheduledLesson {
  final String id;
  final Changeable subject;
  final Changeable teacher;
  final Changeable room;
  final int lessonNumber;
  final String info;
  String? classShort;

  ScheduledLesson(this.id, this.subject, this.teacher, this.room,
      this.lessonNumber, this.info, this.classShort);

  ScheduledLesson.fromJson(dynamic json)
      : id = json['Nr'] ?? "",
        lessonNumber = int.parse(json['St']),
        info = json['If'] ?? "",
        subject = _parseChangeable(json['Fa']),
        teacher = _parseChangeable(json['Le']),
        room = _parseChangeable(json['Ra']);
}

Changeable _parseChangeable(dynamic json) {
  if (json is String) {
    return Changeable(json, false);
  } else {
    return Changeable(json['value'] ?? "", true);
  }
}
