import express from "express";
import { getBiases, createBias } from "../controllers/biases.js"

const router = express.Router();

router.get("/", getBiases)
router.post("/", createBias)

export default router