const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/product', productController.create);
router.get('/products', productController.getAll);
router.get('/product/:id', productController.getOne);
router.put('/product/:id', productController.update);
router.delete('/product/:id', productController.destroy);

module.exports = router;
