import Appointment from "../model/Appointment.js";
// 
export const appointmentRegister = async (req, res) => {
  try {
    const { clientId, doctorId, appointmentDate, timeSlot, status } = req.body;
    if (!clientId || !doctorId || !appointmentDate || !timeSlot || !status) {
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
      timeSlot,
      status: status || 'scheduled'
    });
    
    await newAppointment.save();
    res.status(201).json({ message: 'Appointment registered successfully', appointment: newAppointment });
  } catch (error) {
    res.status(500).json({ message: 'Error registering appointment', error: error.message });
  }
}
// get appointment details for doctor
export const getAppointments = async (req, res) => {
  try {
    const { doctorId } = req.params;
    const appointments = await Appointment.find({ doctorId }).populate('clientId').populate('doctorId');
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching appointments', error: error.message });
  }
}
// get appointment details for client
export const getClientAppointments = async (req, res) => {  
  console.log("Fetching client appointments");
  console.log("Request params:", req.params);
  try {
    const { clientId } = req.params;
    console.log("Client ID:", clientId);
    if (!clientId) {
      return res.status(400).json({ message: 'Client ID is required' });
    }
    const appointments = await Appointment.find({ clientId }).populate('clientId').populate('doctorId');
    res.status(200).json({ message: 'Client appointments fetched successfully', appointments });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching client appointments', error: error.message });
  }
}
// cancel appointment
export const cancelAppointment = async (req, res) => {  
  try {
    const { appointmentId } = req.params;
    const appointment = await Appointment.findByIdAndDelete(appointmentId);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.status(200).json({ message: 'Appointment cancelled successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error cancelling appointment', error: error.message });
  }
}