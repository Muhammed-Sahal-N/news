import bcrypt from "bcrypt"
import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js"


export const signup = async(req, res,next)=>{

    const {username,email,password}=req.body

    if(!username || !email || !password || username=== "" || email=== "" || password=== "" ){
      return  next(errorHandler(400,"all fields are required" ))
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

        next(error)

    }
}