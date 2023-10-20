import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./route/auth.js"
import usersRoute from "./route/users.js"
import hotelsRoute from "./route/hotels.js"
import roomsRoute from "./route/rooms.js"

const app = express();
dotenv.config()

//connect

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongodb")
    } catch (err) {
        throw err
    }
}



mongoose.connection.on("disconnected" , () => {
    console.log("disconnected")
})


app.use( (err,req,res,next) => {

    const erorStatus =  err.status || 500
    const erormessage = err.message || "something went wrongs"
    return res.status(erorStatus).json({
        success:false,
        status:erorStatus,
        message:erormessage,
        stack : err.stack,        
    })
})


// app.use( (req,res,next) => {
//    console.log("hello im midleware")
// })

//middleware
app.use(cors())
app.use(cookieParser())
app.use(express.json())



app.use("/api/auth" ,authRoute);
app.use("/api/users" ,usersRoute);
app.use("/api/hotels" ,hotelsRoute);
app.use("/api/rooms" , roomsRoute);


app.listen(8800 ,() =>{
    connect()
    console.log("connected to backend")
})

