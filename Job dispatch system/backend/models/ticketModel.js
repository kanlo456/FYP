const mongoose = require('mongoose')
const validator = require("validator");


const Schema = mongoose.Schema

const ticketSchema = new Schema({
    caller: {
        type: String,
        required: true

    },
    category: {
        type: String,
        required: true

    },
    subcategory: {
        type: String,
        required: true

    },
    service: {
        type: String,
        required: true

    },
    offering: {
        type: String,
        required: true

    },
    configItem: {
        type: String,
        required: true

    },
    contactType: {
        type: String,
        required: true

    },
    state: {
        type: String,
        required: true

    },
    impact: {
        type: String,
        required: true

    },
    urgency: {
        type: String,
        required: true

    },
    priority: {
        type: String,
        required: true

    },
    assignmentGroup: {
        type: String,
        required: true

    },
    assigned: {
        type: String,
        required: true

    },
    shortDesciption: {
        type: String,
        required: true

    },
    Description: {
        type: String,
        required: true

    }
})

//ticket insert method
ticketSchema.statics.insert = async function(caller, category, subcategory, service, offering, configItem, contactType, state, impact, urgency, priority, assignmentGroup, assigned, shortDesciption, Description) {

    //validation
    if (!caller || !category || !subcategory || !service || !offering || !configItem || !contactType || !state || !impact || !urgency || !priority || !shortDesciption || !Description) {
        throw Error('All fields must be filled with out assignementGroup&assigned')
    }

    // const existsMail = await this.findOne({ email })
    // const existsUsername = await this.findOne({ username })
    // const salt = await bcrypt.genSalt(10)
    // const hash = await bcrypt.hash(password, salt)
    const ticket = await this.create({ caller, category, subcategory, service, offering, configItem, contactType, state, impact, urgency, priority, assignmentGroup, assigned, shortDesciption, Description })
    return ticket
}

module.exports = mongoose.model('Ticket', ticketSchema)