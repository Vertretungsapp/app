import 'package:dart_date/dart_date.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:readmore/readmore.dart';
import 'package:simple_gesture_detector/simple_gesture_detector.dart';
import 'package:vertretungsapp/api/api.dart';
import 'package:vertretungsapp/api/filter.dart';
import 'package:vertretungsapp/api/stundenplan24/models/lesson.dart';
import 'package:vertretungsapp/api/stundenplan24/models/plan.dart';
import 'package:vertretungsapp/api/stundenplan24/models/schedule.dart';
import 'package:vertretungsapp/components/back_button.dart';
import 'package:vertretungsapp/components/icon_button.dart';
import 'package:vertretungsapp/components/plan/filter_button.dart';
import 'package:vertretungsapp/components/plan/plan_list_item.dart';
import 'package:vertretungsapp/components/plan/reload_button.dart';
import 'package:vertretungsapp/pages/filter.dart';

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

  late Filter filter;

  DateTime date = DateTime.now();
  DateTime initDate = DateTime.now();

  List<DateTime> holidays = [];

  void refreshPlan([bool ignoreCache = false, DateTime? date]) async {
    setState(() {
      plan = getPlan(ignoreCache, date);
    });

    Filter f;

    if (widget.type == ScheduleType.schoolClass ||
        widget.type == ScheduleType.teacher) {
      f = filterManager.getFilter((await plan).schoolnumber, widget.short);
      setState(() {
        filter = f;
      });
    }
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
        filter = filterManager.getFilter(value.schoolnumber, widget.short);
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
        padding: const EdgeInsets.fromLTRB(8, 30, 8, 0),
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
                  Expanded(
                    child: SimpleGestureDetector(
                      behavior: HitTestBehavior.translucent,
                      onHorizontalSwipe: (SwipeDirection direction) {
                        if (direction == SwipeDirection.left) {
                          addDate(false);
                        } else if (direction == SwipeDirection.right) {
                          addDate(true);
                        }
                      },
                      child: FutureBuilder(
                          future: plan,
                          builder: (context, snapshot) {
                            if (snapshot.connectionState ==
                                ConnectionState.done) {
                              isReloading = false;
                            }

                            if (snapshot.hasData && !isReloading) {
                              return _PlanDisplay(
                                  short: widget.short,
                                  plan: snapshot.data!,
                                  type: widget.type,
                                  planPage: this);
                            } else if (snapshot.hasError) {
                              return Column(
                                children: [
                                  Expanded(
                                    child: Column(
                                      mainAxisAlignment:
                                          MainAxisAlignment.center,
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
                                  ),
                                ],
                              );
                            } else {
                              return const CircularProgressIndicator.adaptive();
                            }
                          }),
                    ),
                  )
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
                ? FutureBuilder(
                    future: planPage.plan,
                    builder: (context, snapshot) {
                      if (snapshot.hasData) {
                        final List<Lesson> lessons = [];

                        if (planPage.widget.type == ScheduleType.schoolClass) {
                          lessons.addAll(snapshot.requireData.classes
                              .firstWhere((element) =>
                                  element.short == planPage.widget.short)
                              .lessons);
                        }
                        // else if (planPage.widget.type ==
                        //     ScheduleType.teacher) {
                        //   lessons.addAll(snapshot.requireData.teachers
                        //       .firstWhere((element) =>
                        //           element.short == planPage.widget.short)
                        //       .lessons);
                        // }

                        lessons.sort((a, b) => a.subject.compareTo(b.subject));

                        return VPFilterButton(
                          data: FilterPageData(
                            plan: snapshot.requireData,
                            short: planPage.widget.short,
                            lessons: lessons,
                            filter: planPage.filter,
                            onSave: (filter) => {
                              filterManager.add(filter),
                              planPage.refreshPlan(false, planPage.date)
                            },
                          ),
                        );
                      }

                      return const CircularProgressIndicator.adaptive();
                    })
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
  final _PlanPageState planPage;
  final String short;
  final Plan plan;
  final ScheduleType type;

  const _PlanDisplay(
      {Key? key,
      required this.short,
      required this.plan,
      required this.type,
      required this.planPage})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    final scheduledLessons = [];

    switch (type) {
      case ScheduleType.schoolClass:
        scheduledLessons.addAll(plan.classes
            .firstWhere((element) => element.short == short)
            .schedule
            .where((element) => !planPage.filter.containsLesson(element.id)));
        break;
      case ScheduleType.room:
        scheduledLessons.addAll(plan.rooms
            .firstWhere((element) => element.short == short)
            .schedule
            .where((element) => !planPage.filter.containsLesson(element.id)));
        break;
      case ScheduleType.teacher:
        break;
    }

    return Column(
      children: [
        Text(plan.lastUpdated.format("dd.MM.yyyy HH:mm"),
            style: Theme.of(context)
                .textTheme
                .bodySmall
                ?.copyWith(color: Theme.of(context).colorScheme.tertiary)),
        const SizedBox(height: 5),
        plan.info.isNotEmpty
            ? Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Icon(FontAwesomeIcons.circleInfo, size: 20),
                  const SizedBox(width: 20),
                  Expanded(
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: ReadMoreText(plan.info.join("\n"),
                          trimLines: 3,
                          textAlign: TextAlign.right,
                          colorClickableText:
                              Theme.of(context).colorScheme.primary,
                          trimMode: TrimMode.Line,
                          trimCollapsedText: 'Mehr anzeigen',
                          trimExpandedText: '\nWeniger anzeigen',
                          delimiter: '... ',
                          style: Theme.of(context).textTheme.bodySmall),
                    ),
                  ),
                ],
              )
            : Container(),
        Expanded(
          child: ListView.builder(
            itemCount: scheduledLessons.length,
            itemBuilder: (context, index) {
              return VPPlanListItem(
                  lesson: scheduledLessons[index], type: type);
            },
          ),
        )
      ],
    );
  }
}
