require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const ticketRoutes = require('./routes/tickets')
const userRoutese = require('./routes/user')

const worknotesRoutes = require('./routes/worknotes')//*0402
const surveyRoutes = require('./routes/survey')

//express app
const app = express()

//middleware
app.use(express.json())


app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})



//routes *tutorial workoutRoutes = ticketRoutes
app.use('/api/tickets',ticketRoutes)
app.use('/api/user',userRoutese)

app.use('/api/worknotes', worknotesRoutes)//*0402
app.use('/api/surveys',surveyRoutes)

//soft DeprecationWarning: Mongoose: the `strictQuery` option will be switched
mongoose.set('strictQuery', true);
//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //listen for requests
app.listen(process.env.PORT,()=>{
    console.log('connected to db and listening on port ',process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error)
})
