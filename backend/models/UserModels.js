import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, enum: ['visitor', 'admin', 'ranger'], default: 'visitor' },
    });

const User = model('User', UserSchema);
    
export default User;