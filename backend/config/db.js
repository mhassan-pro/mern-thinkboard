import mongoose from "mongoose";

const connectDB =async () =>{
    try{
        await mongoose.connect("mongodb+srv://mhassanswe_db_user:yG85xgTHTdDAuBeZ@cluster0.vrshsh4.mongodb.net/?appName=Cluster0");
        console.log("DATABASE CONNECTED SUCCESSFULLY");
    }
    catch(error){
        console.log("Error while connecting to database:",error);
        process.exit(1); // exit with failure code

    }
}

export default connectDB;