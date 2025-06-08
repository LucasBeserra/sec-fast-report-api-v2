const express = require('express');
const app = express();
const cors = require('cors');
const productRouter = require('./src/routes/products');
const clientRouter = require('./src/routes/clients');
const evaluationRouter = require('./src/routes/evaluations');

app.use(cors());//Para permitir requisicoes de outras origens

app.use(express.json()); //Para ler json

app.use('/api', productRouter);
app.use('/api', clientRouter);
app.use('/api', evaluationRouter);

module.exports = app;
