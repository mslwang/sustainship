const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  buyerName: String,
  address: String,
  areaCode: String,
  postalCode: String,
  items: [{
    item: String,
    weight: String
  }],
  orderWeight: String,
  furthestDeliveryDate: String
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
