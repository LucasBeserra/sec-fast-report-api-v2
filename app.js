const express = require('express');
const app = express();

const avaliacaoRouter = require('./routes/avaliacoes');

app.use(express.json()); //Para ler json
app.use('/avaliacoes', avaliacaoRouter);

app.listen(3000, () => {
    console.log('Servidor subiu na porta 3000');
});
