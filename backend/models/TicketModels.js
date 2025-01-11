import { Schema, model } from "mongoose";

const TicketSchema = new Schema({
  email: { type: String },
  totalVisitors: { type: Number },
  selectedRides: { type: Array },
  totalPrice: { type: Number },
  transactionId: { type: String },
  purchasingDate: { type: Date, default: Date.now },
});

const Ticket = model("Ticket", TicketSchema);

export default Ticket;
