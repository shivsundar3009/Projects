import {User } from "../models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const loginUser = async (req, res) => {

    try {

        const { userName, password } = req.body

        if (!userName || !password) {
            return res.status(401).json({
                message:
                    "username/password is required"
                ,
                success: false
            })
        }

        const user = await User.findOne({ userName })

        if (!user) {
            res.status(401).json({
                message: "user not found",
                success: false
            })
        }

        const checkPassword = await bcrypt.compare(password, user.password)

        if (!checkPassword) {
            return res.status(401).json(
                {
                    message: "incorrect password",
                    success: false
                }
            )
        }

        const payload = {
            _id: user._id
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })

        res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true })
            .json(
                {
                    message: "user logged in successfully",
                    user,
                    success:true

                })

    } catch (error) {

         return console.log(error , "error in login");
        

    }

}

export const getOtherUsers = async (req , res ) => {

       try {

        const loggedInUsedID = req._id

       const otherUsers = await User.find({_id : {$ne:loggedInUsedID}})
       
       console.log(otherUsers);

    res.json(otherUsers)

        
       } catch (error) {
        
       }


}

export const logoutUser = async (req, res) => {

    try {

        res.status(200).cookie("token","",{maxAge:0}).json({
            message:"successfully logged out",
            success:true
        })
        
    } catch (error) {

        res.status(400).json({
            message:"user logout Failed",
            success:false
        })
        
    }

}