const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

const openConnection = require('./database/connection.js')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`My Booklist is up and running @ http://localhost:${port}`);
    openConnection();
});

app.get('/', (req, res) => {
    res.status(200).send('API funcionando');
});
