import 'package:flutter/material.dart';
import 'package:vertretungsapp/api/api.dart';
import 'package:vertretungsapp/api/cache.dart';
import 'package:vertretungsapp/api/session.dart';
import 'package:vertretungsapp/api/stundenplan24/models/plan.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  late Future<Plan> plan;

  void initPlan() async {
    await login(Credentials("10000000", Username.schueler, "password"));
    plan = getPlan();
  }

  @override
  void initState() {
    super.initState();
    cache.clear();
    initPlan();
  }

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
        body: Column(children: [
      _Headline(),
    ]));
  }
}

class _Headline extends StatelessWidget {
  const _Headline({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
        child: RichText(
            text: TextSpan(
                style: Theme.of(context).textTheme.displayLarge,
                children: [
          const TextSpan(text: "Vertretungsapp"),
          TextSpan(
              text: ".",
              style: TextStyle(color: Theme.of(context).colorScheme.primary))
        ])));
  }
}
