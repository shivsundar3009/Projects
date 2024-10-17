import User from "../models/user.model.js"

// Get all users

export const getUsers = async (req, res) => {
    try {
        const users = await User.find()

        if(!users || users.length==0) return res.status(404).json({message: 'No users found'});

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
    try {
        // Destructure user data from the request body
        const { name, age, city } = req.body;

        // Check if all fields are provided
        if (!name || !age || !city) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const user = await User.findOne({name})

        if(user) return res.status(409).json({ message: "User already exists"})

        // Create a new User instance and save to the database
        // Alternatively, you can use User.create() which creates and saves the document in one step:
        // const savedUser = await User.create({ name, age, city });

        const newUser = new User({
            name,
            age,
            city
        });

        // Save the user to the database
        const savedUser = await newUser.save();

        // Respond with the saved user
        res.status(201).json(savedUser);

    } catch (error) {
        // Handle any errors
        res.status(400).json({ message: error.message });
    }
};
// Update a user

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, city } = req.body;

        // Check if any data is provided for update
        if (!name && !age && !city) {
            return res.status(400).json({ message: "At least one field (name, age, city) is required for update." });
        }

        // Fetch the current user from the database using the ID
        const existingUser = await User.findById(id);
        if (!existingUser) {
            return res.status(404).json({ message: "User not found." });
        }

        // Check if the provided data is different from the existing data
        const isNameSame = name && name === existingUser.name;
        const isAgeSame = age && age === existingUser.age;
        const isCitySame = city && city === existingUser.city;

        if (isNameSame && isAgeSame && isCitySame) {
            return res.status(400).json({ message: "No changes detected. Please provide updated information." });
        }

        // Only update the fields that are provided and are different
        const updatedFields = {};
        if (name && !isNameSame) updatedFields.name = name;
        if (age && !isAgeSame) updatedFields.age = age;
        if (city && !isCitySame) updatedFields.city = city;

        // Find the user by ID and update the relevant fields
        const updatedUser = await User.findByIdAndUpdate(
            id,
            updatedFields, // Only pass the fields that are provided and different
            { new: true, runValidators: true } // 'new' to return the updated user, 'runValidators' to apply schema validation
        );

        // Return the updated user data
        return res.status(200).json(updatedUser);

    } catch (error) {
        // Handle any server-side errors
        return res.status(500).json({ message: error.message });
    }
};

// delete a user 

export const deleteUser = async (req, res) => {
    try {
        // Find the user by ID and delete
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        // If no user is found, return a 404 error
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found." });
        }

        // Return a success message when the user is deleted
        return res.status(200).json({ message: "User deleted successfully." });

    } catch (error) {
        // Handle any server-side errors
        return res.status(500).json({ message: error.message });
    }
};