import 'package:flutter/material.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'package:vertretungsapp/api/cache.dart';
import 'package:vertretungsapp/theme.dart';

import 'pages/home.dart';

void main() async {
  await Hive.initFlutter();
  await cache.initCache();
  runApp(const Main());
}

class Main extends StatelessWidget {
  const Main({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(title: "Vertretungsapp.", theme: darkTheme, home: const HomePage());
  }
}
