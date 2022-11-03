# Übung zu Mongoose References (Populate & Select)

## Setup

installiere alles mit `npm install`
befülle die datenbank mit `node seed.js`

Es gibt 2 Models: Authors & Books welche eine Relation von 1:n haben (one to many)
der Controller für Books ist schon implementiert


## Aufgaben

- implementiere alle controller-middlewares in `/controllers/authorsController`
- sorge dafür das die books im endpunkt `GET /authors` gepopulated werden
- sorge dafür das die books im endpunkt `GET /authors` NUR den titel zurück geben (nichts anderes). 
- Erstelle ein neues model `Publisher`. mit folgendem Schema:
```javascript
const publisher = {
    _id: 'my-id',
    __v: 0,
    name: 'Publisher 1',
    books: ['id1', 'id2'],
}
```

Erstelle hierfür auch einen Endpunkt um neue Publisher zu erstellen und einen Endpunkt um eine Liste aller Publisher auszugeben. in dieser Liste sollten die Books gepopulated werden

## Bonus

Erweitere das Schema für Book wie folgt:

```javascript
const Schema = mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  genre: {type: String, enum: ['Old', 'New']},
  publisher: { type: mongoose.Schema.Types.ObjectId, ref:'Publisher' } // !!
})
```

Wenn du ein neues Book erstellst, sorge dafür, dass die generierte _id auch bei dem Publisher hinzugefügt wird.
Wenn ein neuer Publisher erstellt wird soll dieser Publisher auch bei allen Büchern welche er hat hinzugefügt werden

Beispiel:

es wird folgendes Book erstellt:

```javascript
const book = {
    _id: 'book-id-15',
    __v: 0,
    title: 'Title 15',
    price: 10,
    genre: 'Old',
    publisher: 'publisher-id-1'
}
```

das fürt dazu das sich der Publisher mit der Id `publisher-id-1` so updaten muss

```javascript
const publisher = {
    _id: 'publisher-id-1',
    __v: 0,
    title: 'Publisher 1',
    books: ['book-id-15']
}
```