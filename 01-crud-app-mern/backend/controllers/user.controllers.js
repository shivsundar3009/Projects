import User from "../models/user.model.js";

// Get all users

export const getUsers = async (req, res) => {
    try {
        const users = await User.find()

        if(!users) return res.status(404).json({message: 'No users found'});

        res.status(200).json(users);

    } catch (error) {
        
        res.status(500).json({ message: error.message });
    }
}

// Get a single user

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)

        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json(user);

    } catch (error) {
        
        res.status(500).json({ message: error.message });
    }
}

// Create a new user

export const createUser = async (req, res) => {
    const newUser = new User(req.body);

    try {
        const savedUser = await newUser.save();

        res.status(201).json(savedUser);

    } catch (error) {
        
        res.status(400).json({ message: error.message });
    }
}

// Update a user

export const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedUser) return res.status(404).json({ message: "User not found" });

        res.status(200).json(updatedUser);

    } catch (error) {
        
        res.status(500).json({ message: error.message });
    }
}

// delete a user 

export const deleteUser = async (req, res) => {
   
    try {

        const deleteUser = await User.findByIdAndDelete(req.params.id)

        if (!deleteUser) return res.status(404).json({ message: "User not found" });
    
   } catch (error) {

    res.status(500).json({message: error.message})
    
   }
}