const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
app.use(cookieParser());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mernauth',{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log("Connected to DB");
});

const userRouter = require('./routes/user');
app.use('/user',userRouter);

app.listen(5000,()=>{   
    console.log("Server is running");
});