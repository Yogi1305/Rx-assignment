import mongoose from 'mongoose';    
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specialty: {
    type: String,
    required: true
  },
  experience: {
    type: Number,
    required: true
  },
    contact: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    availability: {
        type: [String],
        required: true
    }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor;
