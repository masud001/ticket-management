
import User from '../models/UserModels.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Initialize express router
export const fetch = async (req, res) => {
    try {
        res.send("hello world from fetch");
        return res.status(200).json({ message: "hello world" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
        console.log(error);
    }
}

// Registration
export const register = async (req, res) => {
    const { name, email, password, role } = req.body;
    // check if email already exists
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).send('User already exists');

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, role });
    await user.save();
    res.status(201).send('User registered');
};



// Login
export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send('User not found');
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid credentials');
    // Log the secret for debugging
    // console.log('JWT_SECRET:', process.env.JWT_SECRET);
    const token = jwt.sign({ 
        id: user._id, 
        role: user.role }, 
        process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ 
        token, 
        user: { 
        id: user._id, 
        name: user.name, 
        email: user.email, 
        role: user.role 
    } });
};