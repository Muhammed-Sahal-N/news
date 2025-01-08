import bcrypt from "bcrypt"
import User from "../models/user.model.js"

export const signup = async(req, res)=>{

    const {username,email,password}=req.body

    if(!username || !email || !password || username=== "" || email=== "" || password=== "" ){
        return res.status(400).json({message:"all fields required"})
    }

    const hashedPassword = bcrypt.hashSync(password, 10)

    const newUser = new User({

        username,
        email,
        password:hashedPassword,
    })

    try{
        await newUser.save()

        res.json("sign up successfully")

    }catch(error){

        res.status(500).json({message :error.message})

    }
}