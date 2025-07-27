import Doctor from "../model/doctor";

export const doctorregister = async (req, res) => {
  try {
    const { name, specialty, experience, contact, password, availability } = req.body;
    if(!name || !specialty || !experience || !contact || !password || !availability) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const newDoctor = new Doctor({ name, specialty, experience, contact, password, availability });
    await newDoctor.save();
    res.status(201).json({ message: 'Doctor registered successfully', doctor: newDoctor });
  } catch (error) {
    res.status(500).json({ message: 'Error registering doctor', error: error.message });
  }
}