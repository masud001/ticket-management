import { register, login  } from "../controller/userController.js";
import express from "express";
import  authorize  from "../middleware/authMiddleware.js";

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/admin', authorize(['admin']), (req, res) => {
    res.send('Admin content');
});

export default router;