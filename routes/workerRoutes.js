
const express = require('express');
const router = express.Router();
const { registerWorker, getWorkers } = require('../controllers/workerController');
router.post('/register', registerWorker);
router.get('/', getWorkers);
module.exports = router;
