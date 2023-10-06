import 'package:flutter/material.dart';
import 'package:vertretungsapp/api/api.dart';
import 'package:vertretungsapp/api/stundenplan24/models/plan.dart';
import 'package:vertretungsapp/api/stundenplan24/models/schedule.dart';
import 'package:vertretungsapp/components/button.dart';
import 'package:vertretungsapp/pages/plan.dart';

class OverviewPage extends StatefulWidget {
  final ScheduleType type;

  const OverviewPage({Key? key, required this.type}) : super(key: key);

  @override
  State<OverviewPage> createState() => _OverviewPageState();
}

class _OverviewPageState extends State<OverviewPage> {
  late Future<Plan> plan;

  @override
  void initState() {
    super.initState();
    plan = getPlan();
  }

  @override
  Widget build(BuildContext context) {
    final headline = ["Klassen", "Raum", "Lehrer"][widget.type.index];

    return Scaffold(
      body: Center(
        child: Column(
          children: [
            RichText(
              text: TextSpan(
                text: '',
                style: Theme.of(context).textTheme.displayMedium,
                children: <TextSpan>[
                  TextSpan(
                      text: headline,
                      style: TextStyle(
                          color: Theme.of(context).colorScheme.primary)),
                  const TextSpan(text: '-Übersicht'),
                ],
              ),
            ),
            const SizedBox(height: 10),
            FutureBuilder(
                future: plan,
                builder: (context, snapshot) {
                  if (snapshot.hasData) {
                    final List<Schedule> items = [];

                    switch (widget.type) {
                      case ScheduleType.schoolClass:
                        items.addAll(snapshot.data!.classes);
                        break;
                      case ScheduleType.room:
                        items.addAll(snapshot.data!.rooms);
                        break;
                      case ScheduleType.teacher:
                        break;
                    }
                    return Expanded(
                        child: GridView.count(
                            crossAxisCount: 3,
                            mainAxisSpacing: 16,
                            crossAxisSpacing: 16,
                            childAspectRatio: 2,
                            children: items
                                .map((e) =>
                                    _Item(type: widget.type, schedule: e))
                                .toList()));
                  } else if (snapshot.hasError) {
                    return const Text("Error");
                  } else {
                    return const CircularProgressIndicator.adaptive();
                  }
                })
          ],
        ),
      ),
    );
  }
}

class _Item extends StatelessWidget {
  final ScheduleType type;
  final Schedule schedule;

  const _Item({Key? key, required this.type, required this.schedule})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return VPButton(
        onPressed: () => Navigator.push(
              context,
              MaterialPageRoute(
                  builder: (context) =>
                      PlanPage(short: schedule.short, type: type)),
            ),
        text: schedule.short);
  }
}
