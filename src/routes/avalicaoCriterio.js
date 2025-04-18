const express = require('express');
const router = express.Router();
const avaliacaoCriterioController = require('../controllers/avaliacaoCriterioController');

router.post('/avaliacao-criterios', avaliacaoCriterioController.create);
router.get('/avaliacao-criterios', avaliacaoCriterioController.getAll);
router.get('/avaliacao-criterios/:id', avaliacaoCriterioController.getOne);
router.put('/avaliacao-criterios/:id', avaliacaoCriterioController.update);
router.delete('/avaliacao-criterios/:id', avaliacaoCriterioController.delete);

module.exports = router;
