const mongoose = require("mongoose");

const InfoSchema = new mongoose.Schema({
  name: String,
  carbon: Number,
});

const Info = mongoose.model("Info", InfoSchema);

module.exports = Info;
