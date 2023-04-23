const express = require('express');

//controller
const {loginUser,createStaff,signUser,getUserInfo,getHandleTicket,getCustomerTickets} = require('../controllers/userController');

const router = express.Router();

//login route
router.post('/login',loginUser)

//cretae staff account
router.post('/cs',createStaff)

//signup route
router.post('/signup',signUser)

//get user info by username
router.post('/info',getUserInfo)

//get handle ticket by username
router.get('/handle',getHandleTicket)

//get customer ticket
router.post('/cstt',getCustomerTickets)

module.exports = router;
