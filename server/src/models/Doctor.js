import mongoose from 'mongoose';

const slotSchema = new mongoose.Schema({ date: String, times: [String] }, {_id:false});
const doctorSchema = new mongoose.Schema({
  name: String, initials: String, specialty: String, hospital: String,
  status: {type:String, enum:['available','limited','unavailable'], default:'available'},
  next: String, fee: Number, bio: String, slots: [slotSchema],
  userId: {type: mongoose.Schema.Types.ObjectId, ref:'User'}
}, {timestamps:true});

export default mongoose.model('Doctor', doctorSchema);
