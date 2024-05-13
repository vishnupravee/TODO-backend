import mongoose from "mongoose"
export const connectDB=async()=>{
    try{
        const conn = await mongoose.connect("mongodb+srv://vishnup:vishnu8086@cluster0.norh57t.mongodb.net/",{
          useNewUrlParser:true,
          useUnifiedTopology:true,  
        })
        console.log("database connect");
    }catch(error){
        console.log(`Error:${error}`);
        process.exit
    }
    }
