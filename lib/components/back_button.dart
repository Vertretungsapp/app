import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:vertretungsapp/components/icon_button.dart';

class VPBackButton extends StatelessWidget {
  final void Function()? onPressed;

  const VPBackButton({super.key, this.onPressed});

  @override
  Widget build(BuildContext context) {
    return VPIconButton(
        onPressed: () {
          Navigator.pop(context);
          if (onPressed != null) {
            onPressed!();
          }
        },
        icon: const FaIcon(FontAwesomeIcons.circleArrowLeft, size: 30));
  }
}
