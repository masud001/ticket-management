import express from "express";
import { createTicket, getTickets } from "../controller/ticketController.js";

const router = express.Router();

router.post("/create-ticket", createTicket);
router.get("/get-tickets", getTickets);

export default router;
