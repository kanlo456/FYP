// *tutorial  workouts.js = tickets.js 
const express = require('express')
const {
    getReport,
    getTickets,
    getTicket,
    createTicket,
    deleteTicket,
    updateTicket} = require('../controllers/ticketController')

const router = express.Router()

// GET report data
router.get('/',getReport)

// GET all tickes
router.get('/',getTickets)

//GET a single workout
router.get('/:id',getTicket)

//POST a new ticket
router.post('/',createTicket)

//DELETE a ticket
router.delete('/:id',deleteTicket)

//UPDATE a ticket
router.patch('/:id',updateTicket)

module.exports = router