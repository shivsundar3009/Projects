import { User } from "../models/user.model.js";

// create user

export const createUser = async (req,res) => {
    try {
        
      const {name,city,age} = req.body

      const user = User.findOne({name})

      if(user) {
        return res.status(400).json({message: "User already exists"})
      }

      const newUser = new User({name, city, age})
      
      await newUser.save()
      
      res.status(201).json(newUser)

    } catch (error) {

        console.error(error)
        res.status(500).json({message: "Server Error"})
        
    }
}

// get all users

export const getAllUsers = async (req,res) => {
    try {
      
      const users = await User.find()
      
      res.json(users)
      
    } catch (error) {

        console.error(error)
        res.status(500).json({message: "Server Error"})
        
    }
}


// update user

export const updateUser = async (req,res) => {

    try {
        
        const {id} = req.params

        


    } catch (error) {
        
    }

}


// delete user