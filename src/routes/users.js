const {Router} = require('express')

const usersController = require('../controllers/user')
const userRouter = Router()

userRouter.get('/', usersController.index)

userRouter.get('/:id', usersController.show)


module.exports = userRouter