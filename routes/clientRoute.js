import express from 'express';
import { clientlogin, clientregister } from '../controller/client.js';

const router = express.Router();
router.route('/clientregister').post(clientregister);
router.route('/clientlogin').get(clientlogin);

export default router;