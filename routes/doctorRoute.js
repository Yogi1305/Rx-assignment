import express from "express";
import { doctorregister, getAllDoctors, getDoctorDetails } from "../controller/doctor.js";
const router = express.Router();
router.route('/register').post(doctorregister);
router.route('/:id').get(getDoctorDetails);
router.route('/').get(getAllDoctors); 
// router.route('/doctorlogin').get(doctorlogin);
export default router;