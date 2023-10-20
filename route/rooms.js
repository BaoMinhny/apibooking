import express from "express";
import Room from "../models/Room.js";
import { getRoom, getRooms, updateRoom ,createRoom, deleteRoom, updateRoomAvailability } from "../controller/room.js";
import { verifyToken ,verifyUser,verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();

router.post("/:hotelid" ,verifyAdmin, createRoom);
router.put("/availability/:id", updateRoomAvailability);
// update hotels
router.put("/:id" , verifyAdmin ,updateRoom)
//delete    
router.delete("/:id/:hotelid" , deleteRoom)
//get 
router.get("/:id",getRoom)    
//get all


router.get("/" , getRooms)


export default router