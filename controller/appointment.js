import Appointment from "../model/Appointment";

export const appointmentRegister = async (req, res) => {
  try {
    const { clientId, doctorId, appointmentDate, timeSlot } = req.body;
    if (!clientId || !doctorId || !appointmentDate || !timeSlot) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const existingAppointment = await Appointment.findOne({ doctorId, appointmentDate, timeSlot });
    if (existingAppointment) {
      return res.status(409).json({ message: 'Appointment booked by another client' });
    }
    const newAppointment = new Appointment({
      clientId,
      doctorId,
      appointmentDate,
      timeSlot
    });
    
    await newAppointment.save();
    res.status(201).json({ message: 'Appointment registered successfully', appointment: newAppointment });
  } catch (error) {
    res.status(500).json({ message: 'Error registering appointment', error: error.message });
  }
}