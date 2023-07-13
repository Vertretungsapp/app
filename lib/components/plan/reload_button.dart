import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:vertretungsapp/components/icon_button.dart';

class VPReloadButton extends StatelessWidget {
  final void Function() onPressed;

  const VPReloadButton({Key? key, required this.onPressed}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return VPIconButton(onPressed: onPressed, icon: const FaIcon(FontAwesomeIcons.arrowsRotate, size: 30));
  }
}
