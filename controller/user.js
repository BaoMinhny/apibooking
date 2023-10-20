import User from "../models/User.js";


export const UpdateUser = async (req, res, next) => {
    try{
        const updateHotel = await User.findByIdAndUpdate(
            req.params.id ,
            {$set: req.body},
            { new: true }
            );
        res.status(200).json(updateHotel);
     }catch (err){
        res.status(500).json(err);
     }
  };

  export const DeleteUser= async (req, res, next) => {
    try{
        await User.findByIdAndDelete(
          req.params.id
        );
         res.status(200).json("Hotel has been deleted");
      }catch (err){
         res.status(500).json(err);
      }
  };


  export const getUser = async (req,res,next)=>{
    try {
      const Users = await User.findById(req.params.id);
      res.status(200).json(Users);
    } catch (err) {
      next(err);
    }
  }

  export const getallUsers  = async (req, res, next) => {
    try{
        const Users = await User.find();
        res.status(200).json(Users);
     }catch (err){
       next(err)
     }
  };