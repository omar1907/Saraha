const jwt =require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports.auth = async (req, res, next) => {
    const token = req.header('token')
        jwt.verify(token,process.env.JWT_KEY, (err, decoded) => {
            if(err){
                res.json(err)
            }else{
                req.id = decoded.id
                next()
            }
        })

    
}