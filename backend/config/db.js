import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://gmridul898:Mridul%2312345@cluster0.jmc0c.mongodb.net/Food_Full_Stack"
    )
    .then(() => console.log("DB CONNECTED"));
};
