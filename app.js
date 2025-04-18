const express = require('express');
const app = express();

const avaliacaoRouter = require('./routes/avaliacoes');
const produtoRouter = require('./routes/produto');
const clienteRouter = require('./routes/clientes');
const criterioRouter = require('./routes/criterios');
const avaliacaoCriterioRouter = require('./routes/avalicaoCriterio');

app.use(express.json()); //Para ler json

app.use('/api', avaliacaoRouter);
app.use('/api', produtoRouter);
app.use('/api', clienteRouter);
app.use('/api', criterioRouter);
app.use('/api', avaliacaoCriterioRouter);

module.exports = app;
