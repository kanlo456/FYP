// *tutorial  workouts.js = tickets.js 
const express = require('express')
const { getTickets,
    getTicket,
    createTicket,
    deleteTicket,
    updateTicket} = require('../controllers/ticketController')
const requireAuth = require('../middleware/requireAuth') //*** 

const router = express.Router()

// GET all tickes
router.get('/',getTickets)

//GET a single workout
router.get('/:id',getTicket)

//DELETE a ticket
router.delete('/:id',deleteTicket)

//UPDATE a ticket
router.patch('/:id',updateTicket)

//Use the token 
router.use(requireAuth) //***

//POST a new ticket
router.post('/',createTicket)



module.exports = router