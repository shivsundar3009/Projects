import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import {app ,server} from "./socket/socket.js"


// Import your database connection
import connectDB from "./db/db.js";
connectDB();


// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Routes
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import conversationRoutes from "./routes/conversation.routes.js";

app.use("/api/userRoutes", userRoutes);
app.use("/api/authRoutes", authRoutes);
app.use("/api/conversation", conversationRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Chat app server started");
});

// Start the server
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
