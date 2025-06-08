const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController')

router.post('/client', clientController.create);
router.get('/clients', clientController.findAll);
router.get('/client/:id', clientController.findById);
router.get('/client/:name', clientController.findByName);
router.put('/client/:id', clientController.update);
router.delete('/client/:id', clientController.destroy);

module.exports = router;

