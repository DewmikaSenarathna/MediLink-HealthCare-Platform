import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import auth from './routes/auth.js';
import doctors from './routes/doctors.js';
import medicines from './routes/medicines.js';
import appointments from './routes/appointments.js';


import dotenv from "dotenv";

dotenv.config({ path: new URL("../.env", import.meta.url) });
const app=express();
app.use(cors());
app.use(express.json());

app.get('/api/health',(req,res)=>res.json({ok:true,service:'MediLink API'}));
app.use('/api/auth',auth);
app.use('/api/doctors',doctors);
app.use('/api/medicines',medicines);
app.use('/api/appointments',appointments);

const port=process.env.PORT||5000;
mongoose.connect(process.env.MONGO_URI||'mongodb://127.0.0.1:27017/medilink')
.then(()=>app.listen(port,()=>console.log(`MediLink API running on http://localhost:${port}`)))
.catch(err=>{console.error('MongoDB connection failed:',err.message);process.exit(1)});
