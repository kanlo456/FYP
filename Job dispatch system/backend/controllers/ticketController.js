const Ticket = require('../models/ticketModel')
const jwt = require('jsonwebtoken')

// const createToken = (_id) => { //id, secret code , the date/time will save 
//         return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
//     }
// insert ticket
const ticketInsert = async(req, res) => {
    const { caller, category, subcategory, service, offering, configItem, contactType, state, impact, urgency, priority, assignmentGroup, assigned, shortDesciption, Description } = req.body

    try {
        const ticket = await Ticket.insert(caller, category, subcategory, service, offering, configItem, contactType, state, impact, urgency, priority, assignmentGroup, assigned, shortDesciption, Description)

        // const token = createToken(ticket._id)
        res.status(200).json({ caller })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { ticketInsert }