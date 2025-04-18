const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.post('/produtos', produtoController.create);
router.get('/produtos', produtoController.getAll);
router.get('/produtos/:id', produtoController.getOne);
router.put('/produtos/:id', produtoController.update);
router.delete('/produtos/:id', produtoController.deletar);

module.exports = router;
