import Ticket from "../models/TicketModels.js";

export const fetch = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(error);
  }
};

export const createTicket = async (req, res) => {
  const { email, totalVisitors, selectedRides, totalPrice, transactionId } =
    req.body;
  const ticket = new Ticket({
    email,
    totalVisitors,
    selectedRides,
    totalPrice,
    transactionId,
    purchasingDate: Date.now(),
  });

  console.log("Ticket in api: ", ticket);
  await ticket.save();
  res.status(201).json(ticket);
};

export const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(error);
  }
};
