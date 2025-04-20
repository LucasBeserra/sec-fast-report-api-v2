const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.post('/clientes', clienteController.create);
router.get('/clientes', clienteController.getAll);
router.get('/clientes/:id', clienteController.getOne);
router.put('/clientes/:id', clienteController.update);
router.delete('/clientes/:id', clienteController.deletar);

module.exports = router;
