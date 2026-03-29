const express = require('express');
const router = express.Router();
const { register } = require('../controllers/authController');

// Point the "Door" to the "Brain"
router.post('/register', register);

module.exports = router;