import 'package:dart_date/dart_date.dart';
import 'package:flutter/material.dart';
import 'package:vertretungsapp/api/api.dart';
import 'package:vertretungsapp/api/stundenplan24/models/plan.dart';
import 'package:vertretungsapp/components/back_button.dart';
import 'package:vertretungsapp/components/plan/filter_button.dart';
import 'package:vertretungsapp/components/plan/plan_list_item.dart';
import 'package:vertretungsapp/components/plan/reload_button.dart';

class PlanPage extends StatefulWidget {
  final String schoolClass;

  const PlanPage({Key? key, required this.schoolClass}) : super(key: key);

  @override
  State<PlanPage> createState() => _PlanPageState();
}

class _PlanPageState extends State<PlanPage> {
  late Future<Plan> plan;

  @override
  void initState() {
    plan = getPlan();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(30),
        child: Column(
          children: [
            const _TopBar(),
            const SizedBox(height: 10),
            FutureBuilder(
              future: plan,
              builder: (context, snapshot) {
                if (snapshot.hasData) {
                  return Expanded(
                    child: Column(
                      children: [
                        RichText(
                          text: TextSpan(
                            text: 'Klasse ',
                            style: Theme.of(context).textTheme.displayMedium,
                            children: <TextSpan>[
                              TextSpan(text: widget.schoolClass, style: TextStyle(color: Theme.of(context).colorScheme.primary)),
                            ],
                          ),
                        ),
                        Text(snapshot.data!.lastUpdated.toHumanString()),
                        Expanded(
                          child: ListView(
                            children: snapshot.data!.classes
                                .firstWhere((element) => element.short == widget.schoolClass)
                                .schedule
                                .map((e) => VPPlanListItem(lesson: e))
                                .toList(),
                          ),
                        )
                        // Container(width: double.infinity, child: VPButton(onPressed: () => print("Click"), text: "10a")),
                      ],
                    ),
                  );
                } else if (snapshot.hasError) {
                  return Text("Error: ${snapshot.error}");
                } else {
                  return const CircularProgressIndicator();
                }
              },
            ),
          ],
        ),
      ),
    );
  }
}

class _TopBar extends StatelessWidget {
  const _TopBar({super.key});

  @override
  Widget build(BuildContext context) {
    return const Row(
      children: [
        VPBackButton(),
        Spacer(),
        Row(
          children: [
            VPFilterButton(),
            VPReloadButton(),
          ],
        )
      ],
    );
  }
}
