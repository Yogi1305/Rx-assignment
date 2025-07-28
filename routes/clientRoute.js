import express from 'express';
import { clientlogin, clientregister } from '../controller/client.js';

const router = express.Router();
router.route('/register').post(clientregister);
router.route('/login').post(clientlogin);

export default router;