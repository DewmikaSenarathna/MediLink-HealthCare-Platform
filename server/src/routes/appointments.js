import express from 'express';
import crypto from 'crypto';
import Appointment from '../models/Appointment.js';
import Doctor from '../models/Doctor.js';
import {auth,roles} from '../middleware/auth.js';

const router=express.Router();

router.get('/',auth,async(req,res)=>{
  const filter=req.user.role==='patient'?{patient:req.user.id}:{};
  res.json(await Appointment.find(filter).sort({createdAt:-1}));
});

router.post('/',auth,roles('patient'),async(req,res)=>{
  try{
    const {doctorId,date,time}=req.body;
    const d=await Doctor.findById(doctorId);
    if(!d) return res.status(404).json({message:'Doctor not found'});
    if(!date || !time) return res.status(400).json({message:'Appointment date and time are required'});
    const confirmationNumber='MED-'+Math.floor(10000+Math.random()*89999);
    const a=await Appointment.create({
      patient:req.user.id,doctor:d._id,doctorName:d.name,specialty:d.specialty,hospital:d.hospital,
      date,time,fee:d.fee,status:'Confirmed',payment:'Paid',confirmationNumber,confirmation:confirmationNumber
    });
    res.status(201).json(a);
  }catch(e){
    res.status(500).json({message:e.message});
  }
});

router.patch('/:id/cancel',auth,roles('patient','staff'),async(req,res)=>{
  const a=await Appointment.findById(req.params.id);
  if(!a) return res.status(404).json({message:'Appointment not found'});
  if(req.user.role==='patient' && String(a.patient)!==String(req.user.id)) return res.status(403).json({message:'Access denied'});
  a.status='Cancelled'; a.payment='Refunded'; await a.save(); res.json(a);
});

router.patch('/:id/status',auth,roles('doctor','staff'),async(req,res)=>{
  const a=await Appointment.findByIdAndUpdate(req.params.id,{status:req.body.status},{new:true});
  res.json(a);
});

export default router;
