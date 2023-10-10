import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:vertretungsapp/api/filter.dart';
import 'package:vertretungsapp/api/stundenplan24/models/lesson.dart';
import 'package:vertretungsapp/api/stundenplan24/models/plan.dart';
import 'package:vertretungsapp/components/back_button.dart';

class FilterPageData {
  final Plan plan;
  final String short;
  final List<Lesson> lessons;
  final Filter filter;
  final void Function(Filter) onSave;

  const FilterPageData(
      {required this.plan,
      required this.short,
      required this.lessons,
      required this.filter,
      required this.onSave});
}

class FilterPage extends StatelessWidget {
  final FilterPageData data;

  const FilterPage({super.key, required this.data});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Padding(
      padding: const EdgeInsets.fromLTRB(8, 30, 8, 0),
      child: Column(
        children: [
          Row(
            children: [
              VPBackButton(onPressed: () {
                data.onSave(data.filter);
              }),
            ],
          ),
          Center(
            child: RichText(
              text: TextSpan(
                text: 'Filter für ',
                style: Theme.of(context).textTheme.displayMedium,
                children: <TextSpan>[
                  TextSpan(
                      text: data.short,
                      style: TextStyle(
                          color: Theme.of(context).colorScheme.primary)),
                ],
              ),
            ),
          ),
          Expanded(
              child: Padding(
            padding: const EdgeInsets.fromLTRB(0, 4, 0, 4),
            child: GridView.count(
                crossAxisCount: 3,
                mainAxisSpacing: 8,
                crossAxisSpacing: 16,
                childAspectRatio: 1.8,
                children: data.lessons
                    .map((e) => _Item(
                          lesson: e,
                          filter: data.filter,
                        ))
                    .toList()),
          ))
        ],
      ),
    ));
  }
}

class _Item extends StatefulWidget {
  final Lesson lesson;
  final Filter filter;

  const _Item({Key? key, required this.lesson, required this.filter})
      : super(key: key);

  @override
  State<_Item> createState() => _ItemState();
}

class _ItemState extends State<_Item> {
  bool selected = true;

  @override
  void initState() {
    super.initState();
    selected = !widget.filter.containsLesson(widget.lesson.id);
  }

  @override
  Widget build(BuildContext context) {
    return MaterialButton(
        shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(5),
            side: BorderSide(
                color: selected == true
                    ? Theme.of(context).colorScheme.primary
                    : Colors.transparent,
                width: 0.7)),
        color: Theme.of(context).colorScheme.surface,
        onPressed: () {
          setState(() {
            selected = !selected;
            if (selected == false) {
              widget.filter.addLesson(widget.lesson.id);
            } else {
              widget.filter.removeLesson(widget.lesson.id);
            }
          });
        },
        child: Center(
            child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(widget.lesson.subject),
            Text(widget.lesson.teacher,
                style: Theme.of(context)
                    .textTheme
                    .bodySmall!
                    .copyWith(color: Theme.of(context).colorScheme.tertiary)),
            Text(widget.lesson.id,
                style: Theme.of(context)
                    .textTheme
                    .labelSmall!
                    .copyWith(color: Theme.of(context).colorScheme.tertiary)),
          ],
        )));
  }
}
