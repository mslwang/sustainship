// import "./ShipmentTable.css";
import "./Table.css";

import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import Table from "./Table";
// import ReactTable from "react-table";

function ShipmentTable({
  shipments,
  setSingleShipmentShown,
  setCurrShipmentId,
  setCurrAreaCode,
  fulfilled,
  setFulfilled,
  columns
}) {
  

  const data = shipments;

  return (
    <Table
      columns={columns}
      data={data}
      setSingleShipmentShown={setSingleShipmentShown}
      setCurrShipmentId={setCurrShipmentId}
      setCurrAreaCode={setCurrAreaCode}
      fulfilled={fulfilled}
      setFulfilled={setFulfilled}
    />
  );
}

export default ShipmentTable;
