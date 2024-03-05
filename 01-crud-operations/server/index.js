import Express  from "express";
import Mongoose from "mongoose";
import cors  from "cors";
import { User } from "./Models/user.model";

const app = Express()

app.use(cors())

app.use(Express.json())

Mongoose.connect(`mongodb://127.0.0.1:27017/crud`)

app.listen(3000, () => {
    console.log(`server is running at port 3000`)
})

app.get('/', (req,res) => {
    res.send('hii this is server')
})