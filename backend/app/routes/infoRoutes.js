const express = require("express");
const infoModel = require("../models/infoModel.js");
const app = express();

app.get("/info/:name", async (request, response) => {
  try {
    const info = await infoModel.find({ name: request.params.name});
    response.send(info);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/info", async (request, response) => {
  const shipment = new infoModel(request.body);

  try {
    await shipment.save();
    response.send(shipment);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.patch("/info/:name", async (request, response) => {
  const query = {name: request.params.name}
  try {
    const shipment = await infoModel.findOneAndUpdate(query, {$inc : {carbon: request.body.carbon}});
    response.status(200).send();

  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
