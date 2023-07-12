import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:vertretungsapp/components/icon_button.dart';

class VPBackButton extends StatelessWidget {
  const VPBackButton({super.key});

  @override
  Widget build(BuildContext context) {
    return VPIconButton(
        onPressed: () {
          Navigator.pop(context);
        },
        icon: const FaIcon(FontAwesomeIcons.circleArrowLeft, size: 30));
  }
}
