import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

import connectDB from "./db/db.js"
connectDB()

app.use(express.json())
app.use(cookieParser())


app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true, // Allow credentials (cookies)
  }))


app.listen(5000, () => {
    console.log(`server is running at port 5000`)
})

app.get('/',(req,res) => {
    res.send("chat app server start")
})

import userRoutes from "./routes/user.routes.js"
app.use("/api/userRoutes",userRoutes)

import authRoutes from "./routes/auth.routes.js"
app.use("/api/authRoutes",authRoutes)

import conversationRoutes from "./routes/conversation.routes.js"
app.use("/api/conversation", conversationRoutes)