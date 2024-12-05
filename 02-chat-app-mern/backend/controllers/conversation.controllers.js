import {Message} from "../models/message.model.js"
import {Conversation} from "../models/conversation.model.js"

export const sendMessage = async (req,res ) => {

   try {

       const sendersID = req._id

       const recieversID = req.params._id

       const { message } = req.body

       console.log(sendersID , recieversID , message);

       let conversation = await Conversation.findOne({participants : {$all : [sendersID,recieversID]}})

       console.log(conversation);

       if(!conversation) {
           
         conversation = await Conversation.create({
            participants: [sendersID,recieversID]
         })
       }

       const newMessage = await Message.create({
         sendersID,
         recieversID,
         message
       })

      //  await newMessage.save()

       console.log(newMessage._id);
       
       if(newMessage) {

         await conversation.messages.push(newMessage._id)
            
       }

       await conversation.save()

       return res.status(200).json({
         message: "successfull",
         conversation,
         message
       })
   } catch (error) {

      return res.status(400).json({
         message: "error",
         success : "false",
         error:error.message
      })
    
   }

}

export const getMessages = async (req , res) =>  {

     try {

         const sendersID = req._id

         const recieversID = req.params._id

         console.log(sendersID,recieversID);

         const conversation = await Conversation.findOne({
            participants: { $all : [sendersID,recieversID] }
         }).populate("messages")
           
         console.log(conversation);
          res.status(200).json({
            message:"successfull",
            conversation
          })
      
     } catch (error) {
        
       res.status(400).json({
         success:"failed",
         error:error.message
       })
     }

}