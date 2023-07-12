import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:vertretungsapp/components/icon_button.dart';

class VPFilterButton extends StatelessWidget {
  const VPFilterButton({super.key});

  @override
  Widget build(BuildContext context) {
    return VPIconButton(onPressed: () {}, icon: const FaIcon(FontAwesomeIcons.filter, size: 30));
  }
}
