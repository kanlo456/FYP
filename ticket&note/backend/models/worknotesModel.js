// tutorial Workout.js = Ticket.js

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const worknotesSchema = new Schema({
    notes: {
      type: String,
      required: true
    },
    user_id:{
      type:String
    }
  }, { timestamps: true })
  
  module.exports = mongoose.model('worknote', worknotesSchema)