import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:vertretungsapp/components/icon_button.dart';
import 'package:vertretungsapp/pages/filter.dart';

class VPFilterButton extends StatelessWidget {
  final FilterPageData data;

  const VPFilterButton({super.key, required this.data});

  @override
  Widget build(BuildContext context) {
    return VPIconButton(
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => FilterPage(data: data)),
          );
        },
        icon: const FaIcon(FontAwesomeIcons.filter, size: 30));
  }
}
