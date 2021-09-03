const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./controlers/auth')(app);

app.listen(3000, () => console.log('Servidor Iniciado'));

