const express = require('express');

//controller
const {loginCust,signCust} = require('../controllers/custController');

const router = express.Router();

//login route
router.post('/login',loginCust)

//signup route
router.post('/signup',signCust)

module.exports = router;