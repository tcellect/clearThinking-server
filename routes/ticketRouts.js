import express from "express";
import { getTickets, createTicket } from "../controllers/tickets.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// TODO implement the rest of crud endpoints
// TODO fix auth
// TODO learn more about routing
router.get("/", getTickets);
router.post("/", createTicket);

export default router;
