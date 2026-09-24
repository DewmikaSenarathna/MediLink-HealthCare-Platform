import express from 'express';
import Medicine from '../models/Medicine.js';
import {auth,roles} from '../middleware/auth.js';
const router=express.Router();

router.get('/',async(req,res)=>{
  const {q='',hospital='All Hospitals'}=req.query;
  const filter={};
  if(q) filter.name=new RegExp(q,'i');
  if(hospital && hospital!=='All Hospitals') filter.hospital=hospital;
  res.json(await Medicine.find(filter).sort({name:1,hospital:1}));
});
router.patch('/:id',auth,roles('staff'),async(req,res)=>{
  const m=await Medicine.findByIdAndUpdate(req.params.id,{...req.body,updated:'Just now'},{new:true});
  res.json(m);
});
export default router;
