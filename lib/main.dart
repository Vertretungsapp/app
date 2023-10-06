import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'package:vertretungsapp/api/cache.dart';
import 'package:vertretungsapp/api/stundenplan24/models/schedule.dart';
import 'package:vertretungsapp/pages/overview.dart';
import 'package:vertretungsapp/pages/settings.dart';
import 'package:vertretungsapp/themes/dark_theme.dart';

import 'pages/home.dart';

void main() async {
  await Hive.initFlutter();
  await cache.initCache();
  runApp(const Main());
}

class Main extends StatefulWidget {
  const Main({Key? key}) : super(key: key);

  @override
  State<Main> createState() => _MainState();
}

class _MainState extends State<Main> {
  int _selectedIndex = 0;
  late PageController _pageController;

  final List<Widget> _pages = [
    const HomePage(),
    const OverviewPage(type: ScheduleType.schoolClass),
    const OverviewPage(type: ScheduleType.room),
    const OverviewPage(type: ScheduleType.teacher),
    const SettingsPage(),
  ];

  @override
  void initState() {
    super.initState();
    _pageController = PageController();
  }

  @override
  void dispose() {
    _pageController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    SystemChrome.setPreferredOrientations(
        [DeviceOrientation.portraitUp, DeviceOrientation.portraitDown]);

    return MaterialApp(
        title: "Vertretungsapp.",
        darkTheme: darkTheme.themeData,
        themeMode: ThemeMode.dark,
        home: Scaffold(
          body: SizedBox.expand(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(8, 80, 8, 0),
              child: PageView(
                controller: _pageController,
                onPageChanged: (index) {
                  setState(() => _selectedIndex = index);
                },
                children: _pages,
              ),
            ),
          ),
          bottomNavigationBar: BottomNavigationBar(
            iconSize: 20,
            currentIndex: _selectedIndex,
            onTap: _onItemTapped,
            items: const <BottomNavigationBarItem>[
              BottomNavigationBarItem(
                icon: Icon(FontAwesomeIcons.houseChimney),
                label: 'Start',
              ),
              BottomNavigationBarItem(
                icon: Icon(FontAwesomeIcons.peopleGroup),
                label: 'Klassen',
              ),
              BottomNavigationBarItem(
                icon: Icon(FontAwesomeIcons.doorOpen),
                label: 'Räume',
              ),
              BottomNavigationBarItem(
                icon: Icon(FontAwesomeIcons.person),
                label: 'Lehrer',
              ),
              BottomNavigationBarItem(
                icon: Icon(FontAwesomeIcons.gear),
                label: 'Einstellungen',
              ),
            ],
          ),
        ));
  }

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
      _pageController.animateToPage(index,
          duration: const Duration(milliseconds: 200), curve: Curves.easeOut);
    });
  }
}
