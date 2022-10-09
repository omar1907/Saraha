const { signUp, signIn } = require('../controller/user.controller')
const {userValidation } = require('../middlwares/validation/user.validation')
const router = require('express').Router()


router.post('/signup',userValidation,signUp)
router.post('/signin',signIn)

module.exports = router