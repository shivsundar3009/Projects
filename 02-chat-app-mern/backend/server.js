import express from "express"
import dotenv from "dotenv"

dotenv.config() //  default config  file            

const app = express()

const port = process.env.PORT || 3000

app.listen(port, () => (
    console.log(`server is runninng at port ${port}`)
))

app.get("/", (req,zs) => (
    zs.send("hello shiv")
))

