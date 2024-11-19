import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/signup", signup);
router.get("/login", login);
router.get("/logout", logout);

export default router;
//mongodb+srv://dhvanibarot5:123@cluster0.ddk0z.mongodb.net/