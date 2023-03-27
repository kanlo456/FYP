const express = require('express');

//controller
const {loginUser,createStaff,signUser,getUserInfo} = require('../controllers/userController');

const router = express.Router();

//login route
router.post('/login',loginUser)

//cretae staff account
router.post('/cs',createStaff)

//signup route
router.post('/signup',signUser)

//get user info by username
router.get('/info',getUserInfo)

module.exports = router;
