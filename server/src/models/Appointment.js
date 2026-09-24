import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  patient: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  doctor: {type: mongoose.Schema.Types.ObjectId, ref:'Doctor'},
  doctorName: String, specialty: String, hospital: String,
  date: String, time: String, fee: Number,
  status: {type:String, enum:['Confirmed','Completed','Cancelled','Pending Payment'], default:'Pending Payment'},
  payment: {type:String, enum:['Paid','Refunded','Unpaid'], default:'Unpaid'},
  confirmationNumber: {type:String, unique:true},
  confirmation: String
}, {timestamps:true});

export default mongoose.model('Appointment', appointmentSchema);
