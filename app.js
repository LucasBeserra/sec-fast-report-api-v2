const express = require('express');
const app = express();
const cors = require('cors');
const produtoRouter = require('./src/routes/produto');
const clienteRouter = require('./src/routes/clientes');
const criterioRouter = require('./src/routes/criterios');


app.use(cors());//Para permitir requisicoes de outras origens

app.use(express.json()); //Para ler json

app.use('/api', produtoRouter);
app.use('/api', clienteRouter);
app.use('/api', criterioRouter);

module.exports = app;
