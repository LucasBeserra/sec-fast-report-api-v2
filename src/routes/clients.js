const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

router.post('/cliente', clientController.create);
router.get('/clientes', clientController.findAll);
router.get('/cliente/:id', clientController.findById);
router.get('/cliente/:name', clientController.findByName);
router.put('/cliente/:id', clientController.update);
router.delete('/cliente/:id', clientController.destroy);

module.exports = router;

