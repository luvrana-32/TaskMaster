import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://aayush_db_user:tasktracker328@cluster0.eemtdih.mongodb.net/TaskTacker"
    )
    .then(() => {
      console.log("DB connected");
    });
};
