import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:vertretungsapp/api/stundenplan24/stundenplan24.dart';

enum Username { schueler, lehrer }

FlutterSecureStorage secureStorage = const FlutterSecureStorage();

class Credentials {
  String schoolnumber;
  Username username;
  String password;

  Credentials(this.schoolnumber, this.username, this.password);

  @override
  String toString() {
    return "$schoolnumber ${username.name} $password";
  }
}

Future<Credentials> getCredentials() async {
  try {
    String schoolnumber =
        await secureStorage.read(key: "schoolnumber") as String;
    String username = await secureStorage.read(key: "username") as String;
    String password = await secureStorage.read(key: "password") as String;

    return Credentials(
        schoolnumber,
        Username.values.firstWhere((element) => element.name == username),
        password);
  } catch (e) {
    throw Exception("No credentials found");
  }
}

Future<int> login(Credentials credentials) {
  var verify = testCredentials(credentials);

  return verify.then((v) async {
    if (v == 200) {
      await secureStorage.write(
          key: "schoolnumber", value: credentials.schoolnumber);
      await secureStorage.write(
          key: "username", value: credentials.username.name);
      await secureStorage.write(key: "password", value: credentials.password);
    }

    return v;
  });
}
