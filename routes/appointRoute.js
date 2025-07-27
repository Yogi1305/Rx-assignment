import express from "express";
import { appointmentRegister } from "../controller/appointment.js";
const router = express.Router();
router.route("/appointment").post(appointmentRegister)
export default router;