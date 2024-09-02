import express from "express"
import dotenv from "dotenv"
import connectDB from "./database/db.js"

dotenv.config() //  default config  file            

const app = express()

app.use(express.json()) // middleware to parse json data

const port = process.env.PORT || 3000

app.listen(port, () => (
    connectDB(),
    console.log(`server is runninng at port ${port}`)
))

app.get("/", (req,res) => (
    res.send("hello shiv")
))

import userRoutes from "./routes/user.routes.js"
app.use("/api",userRoutes) // routes               
