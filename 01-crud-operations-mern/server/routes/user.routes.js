import express from "express";

const app = express.Router();

app.get("/users", getAllUsers); 

app.post("/users", createUser);

app.get("/users/:id", getUserById);

app.put("/users/:id", updateUser);

app.delete("/users/:id", deleteUser);

export default app;