import express from 'express';
import cors from 'cors';
import clientRoute from './routes/clientRoute.js';  
import doctorRoute from './routes/doctorRoute.js';
import appointmentRoute from './routes/appointRoute.js';

import dotenv from 'dotenv';
dotenv.config();
import dbConnect from './config/db.js';

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

dbConnect();
app.use("/client", clientRoute);
app.use("/doctor", doctorRoute);
app.use("/appointment", appointmentRoute);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});