class Changeable {
  final String value;
  final bool changed;

  Changeable(this.value, this.changed);

  Changeable.fromJson(dynamic json)
      : value = json['value'],
        changed = json['changed'];

  Map<String, dynamic> toJson() => {'value': value, 'changed': changed};
}
