const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;
const database = require('./src/database/database.js');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

database.setupDatabase();
database.insertInitialData();

app.listen(port, () => {
    console.log(`My Booklist is up and running @ http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.status(200).send('API funcionando');
});

app.get('/books', (req, res) => {
    let data = database.getAllBooks();
    data.then(rows => {
        res.status(200).send(rows);
    }).catch(err => {
        console.error('Error at GET /books');
        res.status(500).send(err);
    });
});


app.post('/books', (req, res) => {
    console.log('post', req.body.book);
    let data = database.insertNewBook(req.body.book);
    data.then(result => {
        res.status(200).send(result);
    }).catch(err => {
        console.error('Error at post /books');
        res.status(500).send(err);
    });
    // let rows = database.getAllBooks();
    // res.status(200).send('api post');
});

app.put('/books/:id', (req, res) => {
    console.log('put/update', req.body);
    // let rows = database.getAllBooks();
    res.status(200).send('api update');
});


app.delete('/books/:id', (req, res) => {
    console.log('delete', req.body);

    let data = database.deleteBookById(req.params.id);
    data.then(result => {
        res.status(200).send(result);
    }).catch(err => {
        console.error('Error at post /books');
        res.status(500).send(err);
    });
    // res.status(200).send('api delete');
});