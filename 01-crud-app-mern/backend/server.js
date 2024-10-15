import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './db/db.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

import userRoutes from './routes/user.routes.js';
app.use('/api/users', userRoutes);

connectDB()

const PORT = process.env.PORT
app.listen(PORT, () => {


 console.log(`Server running on port ${PORT}`)
}
)

    