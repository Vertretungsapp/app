import 'package:flutter/material.dart';

class VPButton extends StatelessWidget {
  final VoidCallback onPressed;
  final String text;

  const VPButton({
    super.key,
    required this.onPressed,
    required this.text,
  });

  @override
  Widget build(BuildContext context) {
    return MaterialButton(
      padding: const EdgeInsets.all(12),
      highlightColor: Colors.transparent,
      splashColor: Colors.transparent,
      onPressed: onPressed,
      color: Theme.of(context).colorScheme.surface,
      elevation: 0,
      hoverElevation: 0,
      highlightElevation: 0,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(5)),
      child: Text(text),
    );
  }
}
