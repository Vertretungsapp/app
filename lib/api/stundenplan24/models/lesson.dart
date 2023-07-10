class Lesson {
  final String id;
  final String subject;
  final String teacher;

  Lesson(this.id, this.subject, this.teacher);

  Lesson.fromJson(dynamic json)
      : id = json['UeNr']['value'],
        subject = json['UeNr']['_UeGr'] ?? json['UeNr']['_UeFa'],
        teacher = json['UeNr']['_UeLe'];
}
