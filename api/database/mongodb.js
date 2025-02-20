import mongoose from "mongoose";
import { DB_URI } from "../env.js";

if(!DB_URI) {
    throw new Error("There is no DB_URI");
}

const connectTODatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log("Connected to MongoDB");
    } catch(e) {
        console.error("Error while connecting: " + e);
        process.exit(1);
    }
}

export default connectTODatabase;