import express from 'express';
import Doctor from '../models/Doctor.js';
import {auth,roles} from '../middleware/auth.js';

const router=express.Router();
router.get('/', async (req,res)=>{
  const {q='',specialty='',hospital=''}=req.query;
  const filter={};
  if(q) filter.$or=[{name:new RegExp(q,'i')},{specialty:new RegExp(q,'i')}];
  if(specialty) filter.specialty=specialty;
  if(hospital) filter.hospital=hospital;
  res.json(await Doctor.find(filter).sort({name:1}));
});
router.get('/:id', async(req,res)=>{
  const d=await Doctor.findById(req.params.id); if(!d) return res.status(404).json({message:'Doctor not found'}); res.json(d);
});
router.patch('/:id/slots',auth,roles('doctor','staff'),async(req,res)=>{
  const d=await Doctor.findByIdAndUpdate(req.params.id,{slots:req.body.slots},{new:true});
  res.json(d);
});
export default router;
