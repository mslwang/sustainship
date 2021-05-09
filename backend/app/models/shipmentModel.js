const mongoose = require("mongoose");

const ShipmentSchema = new mongoose.Schema({
  areaCode: String,
  deliveryDate: String,
  totalBuyers: Number,
  totalWeight: Number,
  fulfilled: String,
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order"
    }
  ]
});

const Shipment = mongoose.model("Shipment", ShipmentSchema);

module.exports = Shipment;
