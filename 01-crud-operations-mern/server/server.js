import express from "express"

const app = express()

app.get('/', (req,res) => (
    res.send("hello g")
))

app.listen(5000, () => (
    console.log("server is running at port 5000")
))