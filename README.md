# Übung zu Auth & Mongoose helpers

## Setup

installiere alles mit `npm install`

Das Projekt ist das gleiche wie wir gestern in der Musterlösung entwickelt haben


## Aufgaben

- Wir wollen nicht dass unser `GET /user` Endpunkt den token und das Passwort zurück gibt. diese sollen aus dem response heraus-genommen werden. überschreibe hierfür die `toJSON` methode unseres User-Models
- Erstelle eine Auth-Middleware welche verfifiziert ob der User einen validen Token schickt (eingeloggt ist). Falls ja soll das User-Objekt an dem Request Objekt gespeichert werden, damit die controller auf den user zugreifen können
- Erstelle eine User-Methode welche es uns erlaubt einen Token zu generieren: `user.generateToken()`
- Erstelle eine User-Static-Function welche uns hilft einen User basierend auf seinem Token zu finden: `const user = await User.findByToken(token)`
- Wir wollen jedesmal wenn das passwort im User gesetzt wird, dass dieses automatisch gehashed wird, bevor wir das document speichern. Erstelle hierfür eine mongoose-middleware welche jedersmal vor dem speichern feststellt ob dass passwort verändert wurde. falls ja soll das passwort gehashed werden. dadurch müssen wir nicht mehr manuell das passwort hashen in `createUser`

## Bonus

- Schreibe einen Endpunkt (mit validierung):

```
POST /user/change-password
body: {
    "password": "my-old-password",
    "newPassword": "my-new-password"
}
```

wird dieser endpunkt aufgerufen soll er das neue passwort setzen. aber nur dann, wenn das mitgegebene passwort (body.password) auch korrekt ist

- Schreibe einen Endpunkt:

```
POST /user/logout
body: {}
```

wird dieser endpunkt aufgerufen soll dafür gesorgt werden, dass sich der user nicht mehr mit dem aktuellen token requests an auth-endpunkte machen kann. 