const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/produto', productController.create);
router.get('/produtos', productController.getAll);
router.get('/produto/:id', productController.getOne);
router.put('/produto/:id', productController.update);
router.delete('/produto/:id', productController.destroy);

module.exports = router;
