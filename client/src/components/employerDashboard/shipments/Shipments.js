import "./Shipments.css";
import SearchBar from "./SearchBar";
// import SearchIcon from '@material-ui/icons/Search';
import Button from "@material-ui/core/Button";
import { CircularProgress } from '@material-ui/core';
// import {IconButton} from "@material-ui/core";

import ShipmentTable from "./ShipmentTable";

import React, { useEffect, useState } from "react";
import axios from "axios";

function Shipments({
  setSingleShipmentShown,
  setCurrShipmentId,
  setCurrAreaCode,
  setFulfilled,
  fulfilled
}) {
  const [searchInput, setSearchInput] = useState("");

  const [shipments, setShipments] = useState([]);
  const [filledShipments, setFilledShipments] = useState([]);

  useEffect(() => {
    getShipmentsByAreaCode("");
    getFilledShipmentsByAreaCode("");
  }, []);

  const getShipmentsByAreaCode = (areaCode) => {
    axios.get("/api/shipments/" + areaCode).then((res) => {
      const shipmentsData = res.data;
      setShipments(shipmentsData);
      console.log(shipmentsData);
    });
  };

  const getFilledShipmentsByAreaCode = (areaCode) => {
    axios.get("/api/fulfilled/shipments/" + areaCode).then((res) => {
      const shipmentsData = res.data;
      setFilledShipments(shipmentsData);
      console.log(shipmentsData);
    });
  };

  const unfulfilledColumns = React.useMemo(() => [
    {
      Header: "DELIVERY ID",
      accessor: "_id",
    },
    {
      Header: "AREA CODE",
      accessor: "areaCode",
    },
    {
      Header: "TOTAL BUYERS",
      accessor: "totalBuyers",
    },
    {
      Header: "TOTAL WEIGHT (KG)",
      accessor: "totalWeight",
    },
    {
      Header: " ",
      Cell: () => (
        <Button
          variant="contained"
          style={{
            backgroundColor: "#1753E5",
            borderRadius: 100,
            color: "white",
            textTransform: "none",
          }}
        >
          View shipment
        </Button>
      ),
    },
  ]);

  const fulfilledColumns = React.useMemo(() => [
    {
      Header: "DELIVERY ID",
      accessor: "_id",
    },{
      Header: "DELIVERY DATE",
      accessor: "deliveryDate",
    },
    {
      Header: "AREA CODE",
      accessor: "areaCode",
    },
    {
      Header: "TOTAL BUYERS",
      accessor: "totalBuyers",
    },
    {
      Header: "TOTAL WEIGHT (KG)",
      accessor: "totalWeight",
    },
    {
      Header: " ",
      Cell: () => (
        <Button
          variant="contained"
          style={{
            backgroundColor: "#1753E5",
            borderRadius: 100,
            color: "white",
            textTransform: "none",
          }}
        >
          View shipment
        </Button>
      ),
    },
  ]);

  return (
    <div className="shipments-main-container">
      <h1 className="dashboard-title">Shipments</h1>
      <div className="shipments-search-bar">
        <h6>Area Code: </h6>
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} placeholder={"Enter Area Code"} />
        <div>
          <Button
            onClick={() => {
              getShipmentsByAreaCode(searchInput);
              getFilledShipmentsByAreaCode(searchInput);
            }}
            variant="contained"
            style={{
              backgroundColor: "black",
              borderRadius: 100,
              color: "white",
              textTransform: "none",
            }}
            // startIcon={ <SearchIcon fontSize="small" style={{fill: "white"}}/>}
          >
            Find
          </Button>
        </div>
      </div>
      <h2 className="shipments-table-names">Unfulfilled Deliveries</h2>
      {!shipments 
        ? <CircularProgress/> 
        :
        <ShipmentTable
          shipments={shipments}
          setSingleShipmentShown={setSingleShipmentShown}
          setCurrShipmentId={setCurrShipmentId}
          fulfilled={"0"}
          setCurrAreaCode={setCurrAreaCode}
          setFulfilled={setFulfilled}
          columns={unfulfilledColumns}
        />
      }
      <h2 className="shipments-table-names">Fulfilled Deliveries</h2>
      <ShipmentTable
        shipments={filledShipments}
        setSingleShipmentShown={setSingleShipmentShown}
        setCurrShipmentId={setCurrShipmentId}
        setCurrAreaCode={setCurrAreaCode}
        fulfilled={"1"}
        setFulfilled={setFulfilled}
        columns={fulfilledColumns}
      />
    </div>
  );
}

export default Shipments;
