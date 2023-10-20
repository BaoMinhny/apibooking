import express, { Router } from "express";
import { Register,Login, Logout } from "../controller/auth.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/register" ,  Register)

router.post("/Login" , Login)
router.post("/Logout" ,verifyToken,Logout)



export default router