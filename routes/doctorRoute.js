import express from "express";
import { doctorregister, getDoctorDetails } from "../controller/doctor.js";
const router = express.Router();
router.route('/doctorregister').post(doctorregister);
router.route('/doctor/:id').get(getDoctorDetails);
// router.route('/doctorlogin').get(doctorlogin);
export default router;