import OrderTable from "./OrderTable";
import Button from "@material-ui/core/Button";
import "./Shipment.css";
import { useState, useEffect } from "react";
import Popup from "./Popup";
import axios from "axios";
import MapContainer from "./MapContainer.js";

import orderFulfilledImage from "../../../images/order_fulfilled.svg";
import deliveryCalculatedImage from "../../../images/delivery_calculated.svg";

function Shipment({
  setSingleShipmentShown,
  currShipmentId,
  currAreaCode,
  fulfilled,
}) {
  const [shipment, setShipment] = useState([]);
  const [orders, setOrders] = useState([]);
  const returnToShipmentsPage = () => {
    setSingleShipmentShown(false);
  };

  const amazonCenter = "550 King Street North";

  useEffect(() => {
    getShipmentsByAreaCode(currAreaCode);
    getOrdersByCode(currAreaCode);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [isShippingPopupOpen, setIsShippingPopupOpen] = useState(false);
  const [deliveryCalculated, setDeliveryCalculated] = useState(
    fulfilled == "1"
  );

  const triggerPopup = () => {
    setIsOpen(!isOpen);
  };

  const triggerShippingPopup = () => {
    setIsShippingPopupOpen(!isShippingPopupOpen);
    setDeliveryCalculated(true);
  };

  const getShipmentsByAreaCode = (areaCode) => {
    if (fulfilled == "1") {
      axios.get("/api/fulfilled/shipments/" + areaCode).then((res) => {
        const shipmentsData = res.data[0];
        setShipment(shipmentsData);
        console.log(shipmentsData);
      });
    } else {
      axios.get("/api/shipments/" + areaCode).then((res) => {
        const shipmentsData = res.data[0];
        setShipment(shipmentsData);
        console.log(shipmentsData);
      });
    }
  };
  const getOrdersByCode = (areaCode) => {
    axios.get("/api/orders/" + areaCode).then((res) => {
      const ordersData = res.data;
      setOrders(ordersData);
      console.log(ordersData);
    });
  };

  return (
    <div className="shipment-main-container">
      <div className="shipment-text">
        <div className="shipment-header-container">
          <div className="shipment-general-info">
            <h1 className="shipment-title">Shipment</h1>
            <p style={{ fontSize: "25px", fontWeight: "normal" }}>
              #{shipment._id}
            </p>
            <ul>
              <li>Area Code: {shipment.areaCode}</li>
              <li>Total Buyers: {shipment.totalBuyers}</li>
              <li>Total Weight: {shipment.totalWeight}</li>
              {deliveryCalculated && (
                <li style={{ color: "#1753E5" }}>
                  Calculated Delivery Date: {shipment.deliveryDate}
                </li>
              )}
            </ul>
            {fulfilled != "1" && (
              <Button
                onClick={triggerPopup}
                variant="contained"
                style={{
                  backgroundColor: "#1753E5",
                  borderRadius: 100,
                  color: "white",
                  textTransform: "none",
                }}
              >
                Out for delivery
              </Button>
            )}
            {fulfilled != "1" && !deliveryCalculated && (
              <Button
                onClick={triggerShippingPopup}
                variant="contained"
                style={{
                  backgroundColor: "#1753E5",
                  borderRadius: 100,
                  color: "white",
                  textTransform: "none",
                }}
              >
                Calculate Shipping
              </Button>
            )}
            <Button
              onClick={returnToShipmentsPage}
              variant="contained"
              style={{
                backgroundColor: "#1753E5",
                borderRadius: 100,
                color: "white",
                textTransform: "none",
              }}
            >
              Return to shipments
            </Button>
          </div>

          <div>
            <div className="map-container">
              <MapContainer></MapContainer>
            </div>
            <h1> hi</h1>
          </div>
        </div>
      </div>

      <OrderTable data={orders} />
      {isOpen && (
        
        <Popup
          handleClose={triggerPopup}
          image={orderFulfilledImage}
          header="Congrats!"
          body={`This shipment saved 20% in greenhouse gas emissions by bundling ${shipment.totalBuyers} orders with a package weight of ${shipment.totalWeight} kg.`}
        />
      )}
      {isShippingPopupOpen && (
        <Popup
          handleClose={triggerShippingPopup}
          image={deliveryCalculatedImage}
          header="Delivery Calculated!"
          body={`By having delivery date on ${shipment.deliveryDate}, Amazon has saved 30% in greenhouse gas emissions.`}
        />
      )}
    </div>
  );
}

export default Shipment;
