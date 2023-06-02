const User = require('../models/user');
const { hash } = require('bcrypt')

class UserController{
    async index(req, res){
        const users = await User.findAll();
        return res.json(users);
    }
    async create(req, res){
        try {   
            const { name, email, password } = req.body
            const password_hash = await hash(password, 8)                 
            const user = await User.create({ name, email, password_hash})   
            if(!user){
                return res.status(404).json({message: "User not created"})
            }
            res
                .status(201)
                .json({
                    name, 
                    email, 
                    id: user.id, 
                    createdAt: user.createdAt, 
                    updatedAt: user.updatedAt
                });        
        }
        catch(err) {
            return res.status(400).send({ message: err.message})
        }
    }
    async update(req, res){
        const { id } = req.params
        const { name } = req.body
        try{
            const user = await User.findByPk(id)
            if(!user){
                return res.status(404).json({message: "User not found"})
            }
            await user.update({ name })
            const { email, createdAt, updatedAt } = user
            res.status(201).json({ name, email, id, createdAt, updatedAt }); 
        } catch(err){
            return res.status(400).send({ message: err.message})
        }
    }
    async show(req, res){
        const { id } = req.params
        try{
            const user = await User.findByPk(id)
            if(!user){
                return res.status(404).json({message: "User not found"})
            }
            const { name, email, createdAt, updatedAt } = user
            return res.json({ id, name, email, createdAt, updatedAt })
        } catch(err){
            return res.status(400).send({ message: err.message})
        }
    }
    async destroy(req, res){
        const { id } = req.params
        try{
            const user = await User.findByPk(id)
            if(!user){
                return res.status(404).json({message: "User not found"})
            }
            await user.destroy();
            res.status(204).send(); 
        } catch(err){
            return res.status(400).send({ message: err.message})
        }

    }
}

module.exports = new UserController();