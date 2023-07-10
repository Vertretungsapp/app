enum Username { schueler, lehrer }

class Credentials {
  String schoolnumber;
  Username username;
  String password;
  Credentials(this.schoolnumber, this.username, this.password);
}
