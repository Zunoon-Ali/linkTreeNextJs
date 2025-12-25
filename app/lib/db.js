import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("MONGO_URI not defined");
}

if (!global._mongoClientPromise) {
  global._mongoClientPromise = mongoose.connect(MONGO_URI).then((mongoose) => mongoose);
}

const connectDB = async () => global._mongoClientPromise;

export default connectDB;
