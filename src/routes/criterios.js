const express = require('express');
const router = express.Router();
const criterioController = require('../controllers/criterioController');

router.post('/criterios', criterioController.create);
router.get('/criterios', criterioController.getAll);
router.get('/criterios/:id', criterioController.getOne);
router.put('/criterios/:id', criterioController.update);
router.delete('/criterios/:id', criterioController.deletar);

module.exports = router;
