import express from "express";
import { appointmentRegister, cancelAppointment, getAppointments, getClientAppointments } from "../controller/appointment.js";
const router = express.Router();
router.route("/getappoint").post(appointmentRegister)
router.route("/:doctorId").get(getAppointments);
router.route("/client/:clientId").get(getClientAppointments);
router.route("/cancel/:appointmentId").delete(cancelAppointment);
export default router;