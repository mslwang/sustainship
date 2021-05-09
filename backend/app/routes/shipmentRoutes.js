const express = require("express");
const orderModel = require("../models/orderModel.js");
const shipmentModel = require("../models/shipmentModel.js")
const app = express();

app.get("/shipments/:areaCode?", async (request, response) => {
  const shipmentsNocode = await shipmentModel.find({fulfilled: "False"}).exec();;

  const shipments = await shipmentModel.find({ areaCode: request.params.areaCode, fulfilled: "False"});;
  try {
    if(!request.params.areaCode){
      response.send(shipmentsNocode)
    } else {
      response.send(shipments);
    }
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/fulfilled/shipments/:areaCode?", async (request, response) => {
  const shipmentsNocode = await shipmentModel.find({fulfilled: "True"});

  const shipments = await shipmentModel.find({ areaCode: request.params.areaCode, fulfilled: "True"});
  try {
    if(!request.params.areaCode){
      response.send(shipmentsNocode)
    } else {
      response.send(shipments);
    }
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/shipments", async (request, response) => {
  const shipment = new shipmentModel(request.body);

  try {
    await shipment.save();
    response.send(shipment);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete("/shipments/:id", async (request, response) => {
  try {
    const shipment = await shipmentModel.findByIdAndDelete(request.params.id);

    if (!shipment) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});

app.patch("/shipments/:areaCode", async (request, response) => {
  const query = {areaCode: request.params.areaCode}

  try {
    const shipment = await shipmentModel.findOneAndUpdate(query, {deliveryDate: request.body.deliveryDate});
    response.status(200).send();

  } catch (error) {
    response.status(500).send(error);
  }
});


module.exports = app;