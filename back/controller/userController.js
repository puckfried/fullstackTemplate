import {User} from "../models/userModel.js"
import bcrypt from "bcrypt"

import 'dotenv/config'


export async function loginUser(req, res, next){
    try {
        const {username, password} = req.body

        if (!username || !password) throw new Error("Missing properties")
        
        const user = await User.findOne().where("username").equals(username)
        if (!user) throw new Error("Username or password not correct")
        
        // use bcrypt for hashing password and compare password
        const pwEqual = await bcrypt.compare(password, user.password)
        
        if (!pwEqual) throw new Error("Username or password not correct")

        
        
        res.send({user});
    } catch(error){
        next(error)
    }
}


export async function registerUser(req,res,next){
    try{
        let { username, email, password } = req.body;

        if (!username || !email || !password) throw new Error("missing properties")
    
        password = await bcrypt.hash(password, 10)

        const newUser = await User.create({ username, email, password });
        
        res.status(201).json({
            message: 'User erfolgreich erstellt!',
            user: newUser,
        });

    }catch(error){
        next(error)
    }
}