import 'dart:convert';

import 'package:http/http.dart' as http;

import 'session.dart';

Future<http.Response> fetch(String url, Credentials credentials) async {
  final response = await http.get(Uri.parse(url), headers: {
    'Authorization':
        'Basic ${base64Encode(utf8.encode('${credentials.username.name}:${credentials.password}'))}'
  });
  return response;
}
