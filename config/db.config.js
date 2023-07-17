import mongoose from "mongoose";
import {config} from './config.js';

const dbConnection = async() => {
    const connection = await mongoose.connect(config.MONGO_URI,{
        useNewUrlParser: true,
    });
    console.log("Mongodb connected at ",connection.connection.host)
}
export default dbConnection;