const nodemailer = require('nodemailer'); //use for send the email
const Mailgen = require('mailgen'); //use for generate the email

const signup = (req,res) => {
    // res.status(201).json({message:'User created successfully'});

    let config = {
        service:'gmail',
        auth:{
        user:process.env.MAILSENDER,
        pass:process.env.MAILSENDERPW
        }
    }

    var transporter = nodemailer.createTransport(config)

 const mail_configs = {
     from:'acftestcodewu@gmail.com',
     to:'fschllabwu@gmail.com',
     subject:'Testing coding 101 email',
     text:"Justing check if the email will be sent"
 }

//  transporter.sendMail(mail_configs,function(error,info){
//  if(error){
//      console.log(error)
//      return reject({message:`An error has occured`})
//  }
//  return resolve({message:"Email sent successfuly"})
//      })

transporter.sendMail(mail_configs).then((info)=>{
    return res.status(201).json({
        message:'You should receive an email',
        info:info.messageId
    });
}).catch(error =>{
    return res.status(500).json({error})
})
    
}

const getbill = (req,res) => {
    const {customerEmail} = req.body;

    let config = {
        service:'gmail',
        auth:{
        user:process.env.MAILSENDER,
        pass:process.env.MAILSENDERPW
        }
    }

    var transporter = nodemailer.createTransport(config)

    // let MailGenerator = new Mailgen({
    //     theme:'default',
    //     product:{
    //         name:'Mailgen',
    //         linl:'https://mailgen.js/'
    //     }
    // })

    // let response = {
    //     body:{
    //         name:'John',
    //         intro:'Your bill has arrived',
    //         data:{
    //             item:"Nodemailer Stack Book",
    //             description:"A Backend application",
    //             price:"$10.00",
    //         }
    //     },
    //     outro:"Looking forward to your next purchase"
    // }

    // let mail = MailGenerator.generate(response)

    const mail_configs = {
        from:process.env.MAILSENDER,
        to:customerEmail,
        subject:'Place Order',
        text:"Justing check the mail from requeset"
        // html:mail
    }

    transporter.sendMail(mail_configs).then((info)=>{
        return res.status(201).json({
            message:'You should receive an email',
            info:info.messageId
        });
    }).catch(error =>{
        return res.status(500).json({error})
    })

}

module.exports = {
    signup,
    getbill  
}