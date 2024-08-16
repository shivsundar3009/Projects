import express from "express"

const app = express()

app.listen(4000, () => (
    console.log("server is runninng at port 4000")
))

app.get("/", (req,zs) => (
    zs.send("hello shiv")
))