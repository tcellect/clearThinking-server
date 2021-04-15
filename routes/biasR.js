import express from "express";
import { getBiases, createBias } from "../controllers/biases.js"
import auth from "../middleware/auth.js"

const router = express.Router();

router.get("/", auth,  getBiases)
router.post("/", auth, createBias)

export default router