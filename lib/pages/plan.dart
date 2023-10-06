import 'package:dart_date/dart_date.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:vertretungsapp/api/api.dart';
import 'package:vertretungsapp/api/stundenplan24/models/plan.dart';
import 'package:vertretungsapp/api/stundenplan24/models/schedule.dart';
import 'package:vertretungsapp/components/back_button.dart';
import 'package:vertretungsapp/components/icon_button.dart';
import 'package:vertretungsapp/components/plan/filter_button.dart';
import 'package:vertretungsapp/components/plan/plan_list_item.dart';
import 'package:vertretungsapp/components/plan/reload_button.dart';

class PlanPage extends StatefulWidget {
  final String short;
  final ScheduleType type;

  const PlanPage({Key? key, required this.short, required this.type})
      : super(key: key);

  @override
  State<PlanPage> createState() => _PlanPageState();
}

class _PlanPageState extends State<PlanPage> {
  late Future<Plan> plan;
  bool isReloading = false;

  DateTime date = DateTime.now();
  DateTime initDate = DateTime.now();

  List<DateTime> holidays = [];

  void refreshPlan([bool ignoreCache = false, DateTime? date]) {
    setState(() {
      plan = getPlan(ignoreCache, date);
    });
  }

  void setDate(DateTime d) {
    refreshPlan(false, d);
    setState(() {
      date = d;
    });
  }

  void addDate(bool reverse) async {
    var date = this.date;

    bool isWeekend(int weekDay) {
      return [6, 7].contains(weekDay);
    }

    bool isHoliday(DateTime d) {
      return holidays
          .map((e) => "${e.year}-${e.month}-${e.getDate}")
          .contains("${d.year}-${d.month}-${d.getDate}");
    }

    DateTime addDays(DateTime d, int count) {
      if (count == 0) return d;
      var sign = count < 0 ? -1 : 1;
      while (count != 0) {
        d = d.add(Duration(days: sign));
        if (!isWeekend(d.weekday) && !isHoliday(d)) {
          count -= sign;
        }
      }
      return d;
    }

    // Add/Subtract 1 day to/from the date and skip weekends as well as holidays
    if (reverse) {
      date = addDays(date, -1);
    } else {
      date = addDays(date, 1);
    }

    setDate(date);
  }

  @override
  void initState() {
    plan = getPlan().then((value) {
      setState(() {
        date = value.date;
        initDate = value.date;
        holidays = value.holidays;
      });
      return value;
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final headline = ["Klasse", "Raum", "Lehrer"][widget.type.index];

    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(30),
        child: Column(
          children: [
            _TopBar(planPage: this),
            const SizedBox(height: 10),
            Expanded(
              child: Column(
                children: [
                  RichText(
                    text: TextSpan(
                      text: '$headline ',
                      style: Theme.of(context).textTheme.displayMedium,
                      children: <TextSpan>[
                        TextSpan(
                            text: widget.short,
                            style: TextStyle(
                                color: Theme.of(context).colorScheme.primary)),
                      ],
                    ),
                  ),
                  const SizedBox(height: 10),
                  _PlanSwitcher(date: date, planPage: this),
                  FutureBuilder(
                      future: plan,
                      builder: (context, snapshot) {
                        if (snapshot.connectionState == ConnectionState.done) {
                          isReloading = false;
                        }

                        if (snapshot.hasData && !isReloading) {
                          return _PlanDisplay(
                              short: widget.short,
                              plan: snapshot.data!,
                              type: widget.type);
                        } else if (snapshot.hasError) {
                          return Expanded(
                            child: Column(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                Text("Kein Plan verfügbar!",
                                    style: Theme.of(context)
                                        .textTheme
                                        .bodyMedium!
                                        .copyWith(
                                            color: Theme.of(context)
                                                .colorScheme
                                                .tertiary)),
                              ],
                            ),
                          );
                        } else {
                          return const CircularProgressIndicator.adaptive();
                        }
                      })
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _TopBar extends StatelessWidget {
  final _PlanPageState planPage;

  const _TopBar({Key? key, required this.planPage}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        const VPBackButton(),
        const Spacer(),
        Row(
          children: [
            planPage.widget.type != ScheduleType.room
                ? const VPFilterButton()
                : Container(),
            VPReloadButton(onPressed: () {
              planPage.isReloading = true;
              planPage.refreshPlan(true, planPage.date);
            }),
          ],
        )
      ],
    );
  }
}

class _PlanSwitcher extends StatelessWidget {
  final DateTime date;
  final _PlanPageState planPage;

  const _PlanSwitcher({Key? key, required this.date, required this.planPage})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        VPIconButton(
            onPressed: () => planPage.addDate(true),
            icon: const FaIcon(FontAwesomeIcons.chevronLeft, size: 30)),
        TextButton(
          onPressed: () {
            planPage.setDate(planPage.initDate);
          },
          style: ButtonStyle(
            overlayColor: MaterialStateProperty.resolveWith<Color>(
              (Set<MaterialState> states) {
                return Colors.transparent;
              },
            ),
            splashFactory: NoSplash.splashFactory,
          ),
          child: Column(
            children: [
              Text(intToWeekday(date.weekday)),
              Text(date.format("dd.MM.yyyy"),
                  style: Theme.of(context).textTheme.labelMedium),
            ],
          ),
        ),
        VPIconButton(
            onPressed: () => planPage.addDate(false),
            icon: const FaIcon(FontAwesomeIcons.chevronRight, size: 30)),
      ],
    );
  }
}

String intToWeekday(int weekday) {
  List<String> weekdays = [
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag"
  ];
  return weekdays[weekday - 1];
}

class _PlanDisplay extends StatelessWidget {
  final String short;
  final Plan plan;
  final ScheduleType type;

  const _PlanDisplay(
      {Key? key, required this.short, required this.plan, required this.type})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    final scheduledLessons = [];

    switch (type) {
      case ScheduleType.schoolClass:
        scheduledLessons.addAll(plan.classes
            .firstWhere((element) => element.short == short)
            .schedule);
        break;
      case ScheduleType.room:
        scheduledLessons.addAll(plan.rooms
            .firstWhere((element) => element.short == short)
            .schedule);
        break;
      case ScheduleType.teacher:
        break;
    }

    return Expanded(
      child: Column(
        children: [
          Text(plan.lastUpdated.format("dd.MM.yyyy HH:mm"),
              style: Theme.of(context)
                  .textTheme
                  .bodySmall
                  ?.copyWith(color: Theme.of(context).colorScheme.tertiary)),
          const SizedBox(height: 5),
          Expanded(
            child: ListView(
              children: scheduledLessons
                  .map((e) => VPPlanListItem(lesson: e, type: type))
                  .toList(),
            ),
          )
        ],
      ),
    );
  }
}
