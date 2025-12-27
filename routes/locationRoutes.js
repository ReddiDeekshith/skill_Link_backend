
const express = require('express');
const router = express.Router();
const { updateLocation, getLocation } = require('../controllers/locationController');
router.post('/update', updateLocation);
router.get('/:workerId', getLocation);
module.exports = router;
