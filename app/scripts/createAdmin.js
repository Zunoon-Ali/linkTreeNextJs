// scripts/createAdmin.js
import mongoose from "mongoose";
import User from "@/app/models/User";

mongoose.connect(process.env.MONGO_URI);

const createAdmin = async () => {
  await User.updateOne(
    { email: "admin@example.com" },
    { $set: { role: "admin" } }
  );
  console.log("Admin role assigned");
  process.exit(0);
};

createAdmin();
