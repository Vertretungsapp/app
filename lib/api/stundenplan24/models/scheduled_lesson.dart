import 'package:vertretungsapp/api/stundenplan24/models/changeable.dart';

class ScheduledLesson {
  final String id;
  final Changeable subject;
  final Changeable teacher;
  final Changeable room;
  final int lessonNumber;
  final String info;
  String? classShort;

  ScheduledLesson(this.id, this.subject, this.teacher, this.room, this.lessonNumber, this.info, this.classShort);

  ScheduledLesson.parseXMLJson(dynamic json)
      : id = json['Nr'] ?? "",
        lessonNumber = int.parse(json['St']),
        info = json['If'] ?? "",
        subject = _parseChangeable(json['Fa']),
        teacher = _parseChangeable(json['Le']),
        room = _parseChangeable(json['Ra']);

  ScheduledLesson.fromJson(dynamic json)
      : id = json['id'],
        lessonNumber = json['lessonNumber'],
        info = json['info'],
        subject = Changeable.fromJson(json['subject']),
        teacher = Changeable.fromJson(json['teacher']),
        room = Changeable.fromJson(json['room']),
        classShort = json['classShort'];

  Map<String, dynamic> toJson() =>
      {'id': id, 'lessonNumber': lessonNumber, 'info': info, 'subject': subject, 'teacher': teacher, 'room': room, 'classShort': classShort};
}

Changeable _parseChangeable(dynamic json) {
  if (json is String) {
    return Changeable(json, false);
  } else {
    return Changeable(json['value'] ?? "", true);
  }
}
