import 'package:flutter/material.dart';
import 'package:vertretungsapp/api/stundenplan24/models/schedule.dart';
import 'package:vertretungsapp/api/stundenplan24/models/scheduled_lesson.dart';

class VPPlanListItem extends StatelessWidget {
  final ScheduledLesson lesson;
  final ScheduleType type;

  const VPPlanListItem({
    super.key,
    required this.lesson,
    required this.type,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
        color: Theme.of(context).colorScheme.surface,
        elevation: 0,
        child: Column(
          children: [
            Row(
              children: [
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.only(
                        left: 10, right: 10, top: 5, bottom: 5),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        Container(
                          width: 40,
                          alignment: Alignment.center,
                          child: Text(lesson.lessonNumber.toString(),
                              style: Theme.of(context).textTheme.displayLarge),
                        ),
                        const SizedBox(width: 10),
                        Container(
                          width: 2,
                          height: 50,
                          decoration: BoxDecoration(
                            color: Theme.of(context).colorScheme.primary,
                            borderRadius: BorderRadius.circular(5),
                          ),
                        ),
                        const SizedBox(width: 10),
                        Expanded(
                          child: Row(
                            // Space between items as big as possible
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            crossAxisAlignment: CrossAxisAlignment.center,
                            children: [
                              Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [
                                  lesson.subject.value != ""
                                      ? Text(
                                          lesson.subject.value,
                                          style: Theme.of(context)
                                              .textTheme
                                              .bodyLarge
                                              ?.copyWith(
                                                  height: 1.2,
                                                  color: (lesson.subject.changed
                                                      ? Theme.of(context)
                                                          .colorScheme
                                                          .error
                                                      : null)),
                                        )
                                      : Container(),
                                  lesson.teacher.value != ""
                                      ? Text(
                                          lesson.teacher.value,
                                          style: Theme.of(context)
                                              .textTheme
                                              .bodyLarge
                                              ?.copyWith(
                                                  height: 1.2,
                                                  color: (lesson.teacher.changed
                                                      ? Theme.of(context)
                                                          .colorScheme
                                                          .error
                                                      : null)),
                                        )
                                      : Container(),
                                ],
                              ),
                              Text(
                                  type == ScheduleType.schoolClass
                                      ? lesson.room.value
                                      : (lesson.classShort ?? ""),
                                  style:
                                      Theme.of(context).textTheme.displaySmall),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
            lesson.info != ""
                ? Padding(
                    padding: const EdgeInsets.only(
                        left: 10, right: 10, top: 10, bottom: 5),
                    child: Row(
                      children: [
                        Flexible(
                          child: Text(
                            lesson.info,
                            style: Theme.of(context)
                                .textTheme
                                .bodySmall
                                ?.copyWith(
                                    color:
                                        Theme.of(context).colorScheme.tertiary),
                            textAlign: TextAlign.left,
                          ),
                        ),
                      ],
                    ),
                  )
                : Container()
          ],
        ));
  }
}
