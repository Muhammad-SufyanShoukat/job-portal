import mongoose from "mongoose";

const connectDB = async () => {

     const MONGO_URL = "mongodb://muhammadsufyan1520:12345@cluster0-shard-00-00.cxxfr.mongodb.net:27017,cluster0-shard-00-01.cxxfr.mongodb.net:27017,cluster0-shard-00-02.cxxfr.mongodb.net:27017/?ssl=true&replicaSet=atlas-yyokfr-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"

    try {
        await mongoose.connect(MONGO_URL);
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;