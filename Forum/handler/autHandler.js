const User = require('../user/userSchema')
const jwt = require('jsonwebtoken')

const bcrypt = require('bcryptjs');
const sendEmail = require('./emailHandler')
const {promisify} = require('util')
const crypto = require('crypto')
exports.signup = async (req,res) =>{
    try{
        const newUser = await  User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        await sendEmail({
            email: newUser.email,
            subject:'Register',
            messages:`Thenk you ${newUser.name} for creating a account`
                })
        res.status(201).json({
            status:'success',
          
})
    }catch(err){
res.status(500).json({
    status:'fail',
    err:'ERRORRR'
})
    }
}

exports.login = async (req,res) =>{
    try{

        const {email,password}= req.body;
        if(!email || !password){
            return res.status(400).send('Pogresen password ili email')
        }

        const user = await User.findOne({email})
        if(!user){
            return res.status(401).send('Nema validen email ili passwrod')
        }

        const isPasswordValid = bcrypt.compareSync(password,user.password)
        if(!isPasswordValid){
            return res.status(401).send('Invalid password ili email')
        }

    const token =jwt.sign(
        {id: user._id,name:user.name,email: user.email, 
        role: user.role},
        process.env.JWT_SECRET,
        {
         expiresIn: process.env.JWT_EXPIRES,}
    )

        res.cookie('jwt',token,{
            expires: new Date(Date.now()+ process.env.JWT_COOKIE_EXPIRES *24 *60 * 60 * 10000),
            secure: false,
            httpOnly: true,
        
             })


             res.status(201).json({
                status: 'success',
                token,
             })
    }catch(err){
        res.status(500).json({
            status:'fail',
            err:err.message,
        })
    }
}
exports.protect = async (req ,res ,next)=>{
    try{
    let token
        if(req.headers.authorization){
        token = req.headers.authorization.split('')[1];

}
if(req.cookies.jwt){
    token = req.cookies.jwt
}
if(!token){
    return res.status(500).send('Nesi logiran')
}
const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

const userTrue = await User.findById(decoded.id);
if (!userTrue) {
  return res.status(401).send('User doesnt longer exist!');
}

req.auth = userTrue;

next();
    }catch(err){
        res.status(500).json({
            status: 'fail',
            err: err.message,
          });
    }
}
exports.forgorPassword = async (req,res) => {

    try{
        const user = await User.findOne({email : req.body.email})
        if(!user){
            return res.status(404).json({
                status: 'This user dosnt exist',
                
              });
        }
        const resetToken = crypto.randomBytes(32).toString('hex' )
        user.passwordResetToken = crypto 
    }catch(err){
    res.status(500).json({
            status: 'fail',
            err: err.message,
          });
    }
}