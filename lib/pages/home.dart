import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:vertretungsapp/api/api.dart';
import 'package:vertretungsapp/api/cache.dart';
import 'package:vertretungsapp/api/session.dart';
import 'package:vertretungsapp/api/stundenplan24/models/plan.dart';
import 'package:vertretungsapp/api/stundenplan24/models/schedule.dart';
import 'package:vertretungsapp/pages/overview.dart';

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
        body: Padding(
      padding: EdgeInsets.only(top: 70, bottom: 70, left: 50, right: 50),
      child: Column(children: [
        _Headline(),
        Expanded(
            child: Column(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                _OverviewButton(
                    icon: FaIcon(FontAwesomeIcons.peopleGroup, size: 50),
                    type: ScheduleType.schoolClass),
                _OverviewButton(
                    icon: FaIcon(FontAwesomeIcons.doorOpen, size: 50),
                    type: ScheduleType.room),
              ],
            )
          ],
        ))
      ]),
    ));
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

class _OverviewButton extends StatelessWidget {
  final FaIcon icon;
  final ScheduleType type;

  const _OverviewButton({Key? key, required this.icon, required this.type})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(
          width: 100,
          height: 100,
          child: MaterialButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                    builder: (context) => OverviewPage(type: type)),
              );
            },
            color: Theme.of(context).colorScheme.surface,
            padding: const EdgeInsets.all(20),
            splashColor: Colors.transparent,
            highlightColor: Colors.transparent,
            shape:
                RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
            child: icon,
          ),
        ),
        const SizedBox(height: 10),
        Text(["Klassen", "Räume", "Lehrer"][type.index],
            style: Theme.of(context).textTheme.bodyLarge)
      ],
    );
  }
}
