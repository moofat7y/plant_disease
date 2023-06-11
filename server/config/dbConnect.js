const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const MONGO_URI = process.env.MONGO_URI;
const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(MONGO_URI);
    console.log("db connected successfuly");
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = dbConnect;
