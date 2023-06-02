const {Router} = require('express')

const usersController = require('../controllers/user')
const userRouter = Router()

userRouter.get('/', usersController.index)
userRouter.post('/', usersController.create)
userRouter.put('/:id', usersController.update)
userRouter.delete('/:id', usersController.destroy)
userRouter.get('/:id', usersController.show)


module.exports = userRouter