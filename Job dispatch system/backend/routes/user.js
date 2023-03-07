const express = require('express');

//controller
const {loginUser,createStaff,signUser} = require('../controllers/userController');

const router = express.Router();

//login route
router.post('/login',loginUser)

//cretae staff account
router.post('/cs',createStaff)

//signup route
router.post('/signup',signUser)

module.exports = router;