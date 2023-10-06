import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class VertretungsappTheme {
  Color background;
  Color primary;
  Color tertiary;
  Color error;
  Color surface;
  Color outline;
  Color onBackground;
  Color onSurface;

  final TextTheme _textTheme = TextTheme(
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
    labelSmall: GoogleFonts.inter(
      fontSize: 10,
      fontWeight: FontWeight.bold,
    ),
    labelLarge: GoogleFonts.inter(
      fontSize: 16,
      fontWeight: FontWeight.bold,
    ),
  );

  VertretungsappTheme({
    required this.background,
    required this.primary,
    required this.tertiary,
    required this.error,
    required this.surface,
    required this.outline,
    required this.onBackground,
    required this.onSurface,
  });

  ThemeData get themeData => ThemeData(
        fontFamily: GoogleFonts.inter().fontFamily,
        useMaterial3: true,
        colorScheme: ColorScheme.dark(
          primary: primary,
          tertiary: tertiary,
          background: background,
          error: error,
          surface: surface,
          outline: outline,
          onBackground: onBackground,
          onPrimary: onBackground,
          onSurface: onSurface,
        ),
        bottomNavigationBarTheme: BottomNavigationBarThemeData(
          backgroundColor: background,
          selectedItemColor: primary,
          unselectedItemColor: onSurface,
          type: BottomNavigationBarType.fixed,
          showUnselectedLabels: true,
          selectedLabelStyle: _textTheme.labelSmall,
          unselectedLabelStyle: _textTheme.labelSmall,
        ),
        splashFactory: NoSplash.splashFactory,
        textTheme: _textTheme,
      );
}
