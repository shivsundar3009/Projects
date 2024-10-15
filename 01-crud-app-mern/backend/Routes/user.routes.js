import express from 'express';

import { getUsers, getUserById , createUser , updateUser , deleteUser } from  "../controllers/user.controllers.js"

const router = express.Router();

router.get("/getUsers", getUsers);

router.get("/getUserById/:id", getUserById);

router.post("/createUser", createUser);

router.put("/updateUser/:id", updateUser);

router.delete("/deleteUser/:id", deleteUser);

export default router;
