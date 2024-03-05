import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true,
    },
    Email:{
        type: String,
        required: true,
    },
    Age:{
        type: Number,
        required: true,

    }
})

export const User = mongoose.model('User', userSchema)