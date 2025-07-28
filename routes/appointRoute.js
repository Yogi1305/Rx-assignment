import express from "express";
import { appointmentRegister, cancelAppointment, getAppointments, getClientAppointments } from "../controller/appointment.js";
const router = express.Router();
router.route("/getappoint").post(appointmentRegister)
router.route("/:doctorId").get(getAppointments);
router.route("/:clientId").get(getClientAppointments);
router.route("/:appointmentId").delete(cancelAppointment);
export default router;