import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

ThemeData darkTheme = ThemeData(
    fontFamily: GoogleFonts.inter().fontFamily,
    useMaterial3: true,
    colorScheme: const ColorScheme.dark(
      primary: Color(0xFF0071F5),
      tertiary: Color(0xFF4E5764),
      background: Color(0xFF111111),
      error: Color(0xFFFF1B1C),
      surface: Color(0xFF181818),
      brightness: Brightness.dark,
      outline: Color(0xFF0071F5),
      onBackground: Color(0xFFEFF1F3),
      onPrimary: Color(0xFFEFF1F3),
      onSurface: Color(0xFFEFF1F3),
    ),
    textTheme: TextTheme(
      displayLarge: GoogleFonts.inter(
        fontSize: 32,
        fontWeight: FontWeight.w900,
      ),
      displayMedium: GoogleFonts.inter(fontSize: 32, fontWeight: FontWeight.w800),
      displaySmall: GoogleFonts.inter(fontSize: 24, fontWeight: FontWeight.w700),
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
      labelLarge: GoogleFonts.inter(
        fontSize: 16,
        fontWeight: FontWeight.bold,
      ),
    ));
