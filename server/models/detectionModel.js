const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
const predSchema = new mongoose.Schema({
  results: [
    {
      confidance: { type: Number, required: true },
      type: { type: String, required: true },
      image: { type: Object, required: true },
      diagnose: { type: String, required: true },
    },
  ],
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
});

//Export the model
module.exports = mongoose.model("Result", predSchema);
