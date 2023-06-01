const User = require('../models/user');

class UserController{
    async index(req, res){
        const users = await User.findAll();
        return res.json(users);
    }
    async show(req, res){
        const {id} = req.params
        const user = await User.findByPk(id)
        if(!user){
            return res.status(404).json({error: "User not found"})
        }
        return res.json(user)
    }
}

module.exports = new UserController();