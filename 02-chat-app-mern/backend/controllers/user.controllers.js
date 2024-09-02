import User from "../models/user.model.js"
import bcrypt from "bcrypt"

// Register User

export const registerUser = async (req, res) => {

    try {

        const { username, email, password, gender } = req.body;

        const user = await User.findOne({ username })

        if (user) return res.status(400).send("Username already exists");

        const hashedPassword = await bcrypt.hash(password, 10)

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`

        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            gender,
            avatar: gender === "male" ? boyProfilePic : girlProfilePic,
        })

        res.status(200).send(newUser)


    } catch (error) {

    }


}



// login user



// get all users



// get user by id 





