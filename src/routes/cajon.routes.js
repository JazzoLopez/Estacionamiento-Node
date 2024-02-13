import { Router } from "express";
import cajonController from "../controllers/cajon.controller.js";
const router = Router();


router.post('/', cajonController.insertOne);


export default router;