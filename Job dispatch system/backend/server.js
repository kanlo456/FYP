require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const ticketRoutes = require('./routes/tickets')
const userRoutese = require('./routes/user')
const nodemailer = require('nodemailer') //for send email to user

const worknotesRoutes = require('./routes/worknotes')//*0402
const surveyRoutes = require('./routes/survey')
const { response } = require('express')//for send email to user

function sendEmail(){
    return new Promise((resolve,reject)=>{
        var transporter = nodemailer.createTransport({
           service:'gmail',
        auth:{
            user:'acftestcodewu@gmail.com',
            pass:'xmbyiemcydfndldl'
        } 
        })
    const mail_configs = {
        from:'acftestcodewu@gmail.com',
        to:'fschllabwu@gmail.com',
        subject:'Testing coding 101 email',
        text:"Justing check if the email will be sent"
    }
    transporter.sendMail(mail_configs,function(error,info){
    if(error){
        console.log(error)
        return reject({message:`An error has occured`})
    }
    return resolve({message:"Email sent successfuly"})
        })
    })
}

//express app
const app = express()

//middleware
app.use(express.json())


app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.get('/mail',(req,res)=>{ //send email
    sendEmail()
    .then(response=>res.send(response.message))
    .catch(error=>res.status(500).send(error.message))
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
