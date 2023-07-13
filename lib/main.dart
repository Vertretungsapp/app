import 'package:flutter/material.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'package:vertretungsapp/api/api.dart';
import 'package:vertretungsapp/api/cache.dart';
import 'package:vertretungsapp/api/session.dart';
import 'package:vertretungsapp/api/stundenplan24/models/plan.dart';
import 'package:vertretungsapp/components/button.dart';
import 'package:vertretungsapp/pages/plan.dart';
import 'package:vertretungsapp/theme.dart';

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

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  late Future<Plan> plan;

  @override
  void initState() {
    super.initState();
    login(Credentials("10000000", Username.schueler, "password"));
    plan = getPlan();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Padding(
      padding: const EdgeInsets.only(top: 70, bottom: 70, left: 20, right: 20),
      child: Column(children: [
        const Headline(),
        FutureBuilder(
          future: plan,
          builder: ((context, snapshot) {
            if (snapshot.hasData) {
              return Expanded(
                child: ListView(
                  children: snapshot.data!.classes
                      .map((e) => VPButton(
                          onPressed: () {
                            Navigator.push(
                              context,
                              MaterialPageRoute(builder: (context) => PlanPage(schoolClass: e.short)),
                            );
                          },
                          text: e.short))
                      .toList(),
                ),
              );
            } else if (snapshot.hasError) {
              return Text("Error: ${snapshot.error}");
            } else {
              return const CircularProgressIndicator();
            }
          }),
        )
      ]),
    ));
  }
}

class Headline extends StatelessWidget {
  const Headline({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
        child: RichText(
            text: TextSpan(style: Theme.of(context).textTheme.displayLarge, children: [
      const TextSpan(text: "Vertretungsapp"),
      TextSpan(text: ".", style: TextStyle(color: Theme.of(context).colorScheme.primary))
    ])));
  }
}
