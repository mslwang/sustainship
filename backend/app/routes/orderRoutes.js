const express = require("express");
const orderModel = require("../models/orderModel.js");
const shipmentModel = require("../models/shipmentModel.js")
const app = express();

app.get("/orders/:areaCode", async (request, response) => {
  const orders = await orderModel.find({ areaCode: request.params.areaCode});

  try {
    response.send(orders);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/orders", async (request, response) => {
  const order = new orderModel(request.body);
  const query = {areaCode: request.body.areaCode}

  try {
    const shipment = await shipmentModel.findOneAndUpdate(query, {$inc: {totalBuyers: 1}})
    const shipment2 = await shipmentModel.findOneAndUpdate(query, {$inc: {totalWeight: request.body.orderWeight}})

    await order.save();
    response.send(order);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete("/orders/:id", async (request, response) => {
  try {
    const order = await orderModel.findByIdAndDelete(request.params.id);

    if (!order) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});

app.patch("/orders/:id", async (request, response) => {
  try {
    const order = await orderModel.findByIdAndUpdate(request.params.id, request.body);
    await orderModel.save();
    response.send(food);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;