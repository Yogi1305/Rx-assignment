import Doctor from "../model/doctor.js";

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
// get doctor details
export const getDoctorDetails = async (req, res) => {
  const doctorId = req.params.id;
  if (!doctorId) {
    return res.status(400).json({ message: 'Doctor ID is required' });
  }
  try {
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching doctor details', error: error.message });
  }
}
// get all doctors
export const getAllDoctors = async (req, res) => { 
  try {
    const doctors = await Doctor.find();
    if (!doctors || doctors.length === 0) {
      return res.status(404).json({ message: 'No doctors found' });
    }
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching doctors', error: error.message });
    
  }
}