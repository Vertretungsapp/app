import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

ThemeData darkTheme = ThemeData(
  fontFamily: GoogleFonts.inter().fontFamily,
  useMaterial3: true,
  colorScheme: ColorScheme.fromSwatch(
    accentColor: const Color(0xFF0071F5),
    brightness: Brightness.dark,
    backgroundColor: const Color(0xFF111111),
    errorColor: const Color(0xFFFF1B1C),
    cardColor: const Color(0xFF181818),
    primarySwatch: Colors.blue,
  ),
  textTheme: TextTheme(
    displayLarge: GoogleFonts.inter(
      fontSize: 32,
      fontWeight: FontWeight.w900,
    ),
    displayMedium: GoogleFonts.inter(fontSize: 48, fontWeight: FontWeight.w800),
    displaySmall: GoogleFonts.inter(fontSize: 36, fontWeight: FontWeight.w700),
    bodyLarge: GoogleFonts.inter(
      fontSize: 18,
      fontWeight: FontWeight.bold,
    ),
    bodyMedium: GoogleFonts.inter(
      fontSize: 16,
      fontWeight: FontWeight.bold,
    ),
    bodySmall: GoogleFonts.inter(
      fontSize: 14,
      fontWeight: FontWeight.bold,
    ),
  ),
);
