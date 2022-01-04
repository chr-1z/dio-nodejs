const express = require('express');
const bodyParser = require('body-parser');

const userRoute = require('./routes/userRoute');

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));


userRoute(app);

app.get('/', (req, res) => res.send('Olá mundo!'));

app.listen(port, () => console.log('Api rodando na porta 3000'));