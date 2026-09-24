import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();
const sign = u => jwt.sign({id:u._id, role:u.role, name:u.name, email:u.email}, process.env.JWT_SECRET || 'medilink-dev-secret', {expiresIn:'7d'});

router.post('/register', async (req,res)=>{
  try{
    const {name,email,phone,password} = req.body;
    if(!name || !email || !phone || !password) return res.status(400).json({message:'All fields are required'});
    if(await User.findOne({email:email.toLowerCase()})) return res.status(409).json({message:'Email already registered'});
    const user = await User.create({name,email:email.toLowerCase(),phone,password:await bcrypt.hash(password,10),role:'patient'});
    res.status(201).json({token:sign(user),user:{id:user._id,name:user.name,email:user.email,phone:user.phone,role:user.role}});
  }catch(e){res.status(500).json({message:e.message});}
});

router.post('/login', async (req,res)=>{
  try{
    const {email,password} = req.body;
    const user = await User.findOne({email:email?.toLowerCase()});
    if(!user || !(await bcrypt.compare(password || '', user.password))) return res.status(401).json({message:'Incorrect email or password'});
    res.json({token:sign(user),user:{id:user._id,name:user.name,email:user.email,phone:user.phone,role:user.role}});
  }catch(e){res.status(500).json({message:e.message});}
});

export default router;
