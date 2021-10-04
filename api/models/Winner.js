const mongoose = require("mongoose");

const WinnerSchema = new mongoose.Schema(
  {
    winnerName: {
      type: String,
      required: true,
      
    },
    winingRoom: { type: String, required: true },
    winingPrice: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Winner", WinnerSchema);
