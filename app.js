const express = require('express');
const app = express();
const cors = require('cors');
const produtoRouter = require('./src/routes/produto');
const clienteRouter = require('./src/routes/clientes');

app.use(cors());//Para permitir requisicoes de outras origens

app.use(express.json()); //Para ler json

app.use('/api', produtoRouter);
app.use('/api', clienteRouter);

module.exports = app;
