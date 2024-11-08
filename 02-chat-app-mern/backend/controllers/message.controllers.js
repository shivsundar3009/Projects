import {Message} from "../models/message.model.js"
import {Conversation} from "../models/conversation.model.js"

export const sendMessage = async (req,res ) => {

   try {

       const senderID = req._id

       const recieverID = req.params._id

       const message = req.body

       const conversation = await Conversation.find({participants : {$all : [senderID,recieverID]}})

       if(!conversation) {
           
         Conversation.create()
       }
    
   } catch (error) {
    
   }

}

export const getMessage = async (req , res) =>  {

     try {
        66
     } catch (error) {
        
     }

}