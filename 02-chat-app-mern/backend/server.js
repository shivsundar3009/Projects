import express from "express"
import dotenv from "dotenv"
import connectDB from "./database/db.js"

dotenv.config() //  default config  file            

const app = express()

const port = process.env.PORT || 3000

app.listen(port, () => (
    connectDB(),
    console.log(`server is runninng at port ${port}`)
))

app.get("/", (req,res) => (
    res.send("hello shiv")
))

