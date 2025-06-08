const express = require('express');
const router = express.Router();
const evaluationController = require('../controllers/evaluationController');

router.post('/evaluation', evaluationController.create);
router.get('/evaluation/:id', evaluationController.findById);
router.put('/evaluation/:id', evaluationController.update);
router.delete('/evaluation/:id', evaluationController.destroy);

module.exports = router;
