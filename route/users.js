import express, { response } from "express"
import { UpdateUser ,DeleteUser,getUser,getallUsers

} from "../controller/user.js   ";
import { verifyToken ,verifyUser,verifyAdmin} from "../utils/verifyToken.js";
const router = express.Router();

router.get("/checkuser/:id" ,verifyUser,(req,res,next)=>{
    res.send("hello user you are login")
})
router.get("/checkauthentication" ,verifyToken,(req,res,next)=>{
    res.send("You are not Login")
})
router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
  res.send("hello admin, you are logged in and you can delete all accounts")
}) 
// update hotels
router.put("/:id" ,verifyAdmin, UpdateUser)
//delete 
router.delete("/:id" ,verifyAdmin, DeleteUser)
//get 
router.get("/:id" ,getUser)    
//get all


router.get("/" , getallUsers)


export default router