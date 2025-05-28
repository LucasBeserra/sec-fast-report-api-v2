const express = require('express');
const router = express.Router();
const avaliacaoController = require('../controllers/avaliacaoController');

router.post('/Avaliacao', avaliacaoController.create);
router.get('/Avaliacaos', avaliacaoController.getAll);
router.get('/Avaliacao/:id', avaliacaoController.getOne);
router.put('/Avaliacao/:id', avaliacaoController.update);
router.delete('/Avaliacao/:id', avaliacaoController.deletar);

module.exports = router;
