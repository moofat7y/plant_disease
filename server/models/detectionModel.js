const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var predSchema = new mongoose.Schema({
  results: [
    {
      confidance: { type: Number, required: true },
      image: { type: String, required: true },
      diagonse: { type: String, required: true },
    },
  ],
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
});

//Export the model
module.exports = mongoose.model("Result", predSchema);
