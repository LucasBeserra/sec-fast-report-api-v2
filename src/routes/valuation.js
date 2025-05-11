const express = require('express');
const router = express.Router();
const valuationController = require('../controllers/valuationController');

router.post('/valuation', valuationController.create);
router.get('/valuations', valuationController.getAll);
router.get('/valuation/:id', valuationController.getOne);
router.put('/valuation/:id', valuationController.update);
router.delete('/valuation/:id', valuationController.deletar);

module.exports = router;

