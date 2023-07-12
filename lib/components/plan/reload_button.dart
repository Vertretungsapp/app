import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:vertretungsapp/components/icon_button.dart';

class VPReloadButton extends StatelessWidget {
  const VPReloadButton({super.key});

  @override
  Widget build(BuildContext context) {
    return VPIconButton(onPressed: () {}, icon: const FaIcon(FontAwesomeIcons.arrowsRotate, size: 30));
  }
}
