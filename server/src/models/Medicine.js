import mongoose from 'mongoose';

const medicineSchema = new mongoose.Schema({
  name: String, hospital: String,
  status: {type:String, enum:['available','limited','unavailable']},
  stock: String, updated: String
}, {timestamps:true});

export default mongoose.model('Medicine', medicineSchema);
