import { Schema, model } from "mongoose";

const VisitorsSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: { type: String, enum: ['user', 'admin', 'ranger'], default: 'user' },
});

const Visitors = model('Visitors', VisitorsSchema);

export default Visitors