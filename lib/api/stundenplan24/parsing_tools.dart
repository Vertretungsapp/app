List<String> parseStringOrListToList(dynamic json) {
  if (json is List) {
    return json.map((e) => e.toString()).toList();
  } else {
    return [json.toString()];
  }
}

List<T> parseArrayOrObjectFromJson<T>(
    dynamic json, T Function(dynamic) parseMethod) {
  if (json is List) {
    return json.map((e) => parseMethod(e)).toList();
  } else if (json is Map) {
    return [parseMethod(json)];
  } else {
    return [];
  }
}
