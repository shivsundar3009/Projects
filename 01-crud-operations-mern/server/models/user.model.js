import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    city: { type: 'string', required : true},
    age: { type: 'string', required : true}
},{timestamps: true});

export const User = mongoose.model(userSchema)