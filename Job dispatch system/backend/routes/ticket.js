const express = require('express')

//ticketInsertController function
const { ticketInsert } = require('../controllers/ticketController')
const router = express.Router()

//submit ticket route
router.post('/insert', ticketInsert)

module.exports = router