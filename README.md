# Übung zu Auth

## Setup

installiere alles mit `npm install`


## Aufgaben

- Erstelle ein User-Model für folgendes Objekt:

```javascript
const user = {
    name: 'Chuck Norris',
    email: 'chuck@norris.de',
    password: 'thisismysecretpassword'
}
```

Entscheide selbständig welche Felder required/unique sind

- Definiere folgende Endpunkte und validiere die Endpunkte mit express-validator. Die Endpunkte müssen noch nicht implementiert werden (du kannst z.b mit httpsErrors ein "NotImplemented" zurück geben)

```
url: POST /user/register
body: {
    "name": "Chuck Norris",
    "email": "chuck@norris.de",
    "password": "thisismysecretpassword"
}

url: POST /user/login
body: {
    "email": "chuck@norris.de",
    "password": "thisismysecretpassword"
}

url: GET /user
```

- Implementiere den "register" Endpunkt. Sorge dafür dass das Passwort nicht in Klartext in der Datenbank steht (mit bcrypt.hash). Der Endpunkt soll einen User in der Datenbank anlegen

- Implementiere den "login" Endpunkt. Wenn der User sich erfolgreich eingeloggt hat soll ein Token zurück gegeben werden (und auf dem User gespeichert werden)

- Implementiere den "GET /user" Endpunkt. dieser Endpunkt erwartet einen Header "X-Auth" welcher den Token des Users enthält. wird kein User zu dem Token gefunden, dann soll ein 401 ausgegeben werden. Andernfalls soll der User zurück gegeben werden

- Wenn der User sich registriert, dann will er natürlich gleich eingeloggt sein. Sorge dafür, dass auch bei der Registrierung der Token schon generiert wird

- Der "GET /user" Endpunkt gibt uns im Response das Passwort und den Token aus. Das soll nicht sein. Sorge dafür, dass beide nicht im Response auftauchen

## Bonus

Baue eine Middleware welche automatisch überprüft of der user angemeldet ist oder nicht (also ob ein valider "X-Auth" header gesetzt ist oder nicht). wenn der user nicht angemeldet ist soll automatisch ein 401 geworfen werden. So soll die middleware eingesetzt werden können

```javascript
// routers/userRouter.js
import auth from '../middewares/auth.js'
import * as controller from '../controllers/usersController.js'

app.get('/', auth, controllers.getUser)

```