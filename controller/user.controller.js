const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const { sendEMail } = require('../email/email')
const jwt = require('jsonwebtoken')


module.exports.signUp = async (req, res) => {
   
    const {name, email, password, age, phone} = req.body
        let user = await userModel.findOne({email}) // diffrence between find and findOne
            if(user){
                res.json({message:"email already exist"})
            }else{
                bcrypt.hash(password, 4, async (err, hash) => {
                    await userModel.insertMany({name, email, password:hash, age, phone})
                    let token = jwt.sign({email},process.env.JWT_KEY,{expiresIn: 60*60})
                        sendEMail({email,token,message:"Hello"})
                        res.json({message:'Register Done..'})
                })
            }
        
    }
module.exports.signIn = async (req, res) => {
    const {email, password} = req.body
        let user = await userModel.findOne({email})
            if(user){
                const match = bcrypt.compare(password,user.password)
                    if(match){
                        let payload = {role:user.role,name:user.name,userId:user._id}    
                            let token = jwt.sign(payload,process.env.JWT_KEY)
                                if(user.emailConfirm==true){
                                    res.json({message:"Login Done",token})
                                }else{
                                    res.json({message:"you not verified"})
                                }
                    }else{
                        res.json({message:"Password Incorrect"})
                    }
            }else{
                res.json({message:"Email doesn,t exist"})
            }
}

