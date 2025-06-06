const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/productController');

router.post('/produto', produtoController.create);
router.get('/produtos', produtoController.getAll);
router.get('/produto/:id', produtoController.getOne);
router.put('/produto/:id', produtoController.update);
router.delete('/produto/:id', produtoController.deletar);

module.exports = router;
