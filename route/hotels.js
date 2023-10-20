import express from "express";

import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js";
import { createHotel ,UpdateHotel,DeleteHotel,Gethotels,Gethotel, countByCity, countByType, getHotelRooms } from "../controller/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
import { get } from "mongoose";

const router = express.Router();

router.post("/" , createHotel);

// update hotels
router.put("/:id"  ,UpdateHotel)
//delete 
router.delete("/:id" , verifyAdmin, DeleteHotel)
//get  
//get all


router.get("/find/:id" , Gethotel) 
router.get("/countByCity" , countByCity)
router.get("/countByType" , countByType)

router.get("/" , Gethotels)
router.get("/room/:id", getHotelRooms);

export default router

