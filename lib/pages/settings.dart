import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:package_info_plus/package_info_plus.dart';
import 'package:url_launcher/url_launcher.dart';

class SettingsPage extends StatefulWidget {
  const SettingsPage({super.key});

  @override
  State<SettingsPage> createState() => _SettingsPageState();
}

class _SettingsPageState extends State<SettingsPage> {
  Future<PackageInfo> packageInfo = PackageInfo.fromPlatform();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(children: [
        Text("Einstellungen", style: Theme.of(context).textTheme.displayMedium),
        const SizedBox(height: 20),
        const Placeholder(),
        const SizedBox(height: 20),
        Container(
            alignment: Alignment.center,
            child: Column(
              children: [
                const Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    _ExternalLink(
                        url: "https://github.com/Vertretungsapp/app",
                        icon: FontAwesomeIcons.github),
                    _ExternalLink(
                        url: "https://vertretungsapp.de",
                        icon: FontAwesomeIcons.globe),
                    _ExternalLink(
                        url: "https://vertretungsapp.de/discord",
                        icon: FontAwesomeIcons.discord),
                  ],
                ),
                const SizedBox(height: 5),
                Text("Vertretungsapp. - Deine Vertretungsapp für Indiware!",
                    style: Theme.of(context).textTheme.bodySmall!.copyWith(
                        color: Theme.of(context).colorScheme.tertiary)),
                FutureBuilder(
                    future: packageInfo,
                    builder: (context, snapshot) {
                      if (snapshot.hasData) {
                        return Text("Version: ${snapshot.requireData.version}",
                            style: Theme.of(context)
                                .textTheme
                                .bodySmall!
                                .copyWith(
                                    color: Theme.of(context)
                                        .colorScheme
                                        .tertiary));
                      } else {
                        return Text("Version: -",
                            style: Theme.of(context)
                                .textTheme
                                .bodySmall!
                                .copyWith(
                                    color: Theme.of(context)
                                        .colorScheme
                                        .tertiary));
                      }
                    }),
                const SizedBox(height: 5),
                Text("Mit ♥️ zu Open Source für dich!",
                    style: Theme.of(context).textTheme.bodySmall!.copyWith(
                        color: Theme.of(context).colorScheme.tertiary)),
              ],
            ))
      ]),
    );
  }
}

class _ExternalLink extends StatelessWidget {
  final String url;
  final IconData icon;

  const _ExternalLink({required this.url, required this.icon});

  @override
  Widget build(BuildContext context) {
    return IconButton(
        onPressed: () {
          launchUrl(Uri.parse(url));
        },
        icon: Icon(icon));
  }
}
