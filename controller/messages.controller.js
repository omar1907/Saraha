const msgModel = require('../models/message.model')
const userModel = require('../models/user.model')

module.exports.addMsg = async (req, res) => {
    const {message, userId} = req.body
    let user = await userModel.findById(userId)
    if(!user){
        res.json({message:'not found'})
    }else {
        await msgModel.insertMany({message,userId})
        res.json({message:"success"})
    }
}

module.exports.getMsg = async(req, res) => {
    const userId = req.header('id')
    // let user = await userModel.findById(userId)
    let msgs = await msgModel.find({userId})
    res.json({message:"Done",msgs})
}