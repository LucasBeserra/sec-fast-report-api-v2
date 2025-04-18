const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const avaliacaoController = require('../controllers/avaliacaoController');

// Rota para obter uma avaliação por ID
router.get('/:id', avaliacaoController.getAvaliacaoPorId);

// Rota para obter todas as avaliacoes
router.get('/', avaliacaoController.getAllAvaliacoes);

// Rota para criar uma nova avaliação
router.post(
    '/',
    [
      body('codigo_relatorio').notEmpty().withMessage('Código do relatório é obrigatório'),
      body('numero_serie').notEmpty().withMessage('Número de série é obrigatório'),
      body('data').notEmpty().withMessage('Data é obrigatória'),
      body('produto_id').isInt().withMessage('Produto ID deve ser um número'),
      body('cliente_id').isInt().withMessage('Cliente ID deve ser um número'),
      body('criterios').isArray({ min: 1 }).withMessage('Critérios devem ser fornecidos'),
    ],
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
    avaliacaoController.criarAvaliacao
);



module.exports = router;
