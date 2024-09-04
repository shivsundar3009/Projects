import mongoose from "mongoose";

const messageSchema = mongoose.Schema({

    senderId: {
        typeof: Object.
    }

},{Timestamp: true})

const message = mongoose.model('Message', messageSchema);