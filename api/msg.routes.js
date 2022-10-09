const { addMsg, getMsg } = require('../controller/messages.controller')

const router = require('express').Router()

router.post('/',addMsg)
router.get('/',getMsg)


module.exports = router