const nodemailer = require("nodemailer")

const sendEmial = async(options) => {
    // 
    const transporter = nodemailer.createTransport({
        host:"sandbox.smtp.mailtrap.io",
        port:"2525",
        auth:{
            user:'4f1f9138448470',
            pass:'b67384bfe84e2e',
        },
    })
    transporter.verify((err,succ)=>{
        if(err){
            console.log(err.messages)

        }else{
            console.log('success')
        }
    })
    const mailOptions = {
        from:"It Forum <itforum@forum.com",
        to: options.email,
        subject: options.subject,
        text: options.messages,
    }


    //Isprati
    await transporter.sendMail(mailOptions)

}
module.exports = sendEmial