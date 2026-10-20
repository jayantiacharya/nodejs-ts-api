
import mongoose from "mongoose";

export const connectDb:() =>Promise<void> = async() => {
    try{
         await mongoose.connect(process.env.MONGO_URI as string);
         console.log("connection to db established")
    }
    catch(error:any){
       console.log("error connecting to db", error.message);

       process.exit(1)
    }
};





