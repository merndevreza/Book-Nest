import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
const cached = {
  //connection
  //promise
};

export default async function connectMongo() {
  if (!MONGO_URI) {
    throw new Error(
      "Please define the MONGO_URI environment variable inside .env"
    );
  }
  if (cached.connection) {
    return cached.connection;
  }
  if (!cached.promise) {
    const opt = {
      bufferCommands: false,
      dbName: "BookNest",
    };
    cached.promise = mongoose.connect(MONGO_URI, opt);
  }

  try {
    cached.connection = await cached.promise;
  } catch (error) {
   cached.promise=undefined;
   throw error;
  }
  return cached.connection;
}
