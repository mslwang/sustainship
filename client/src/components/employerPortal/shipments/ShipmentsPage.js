import Shipments from "./Shipments";
import Shipment from "./Shipment";

import { useState } from "react";

function ShipmentsPage({ isSingleShipmentShown, setSingleShipmentShown}) {
  const [currShipmentId, setCurrShipmentId] = useState(null);
  const [currAreaCode, setCurrAreaCode] = useState(null);
  const [fulfilled, setFulfilled] = useState(null);

  return (
    <>
      {isSingleShipmentShown ? (
        <Shipment
          setSingleShipmentShown={setSingleShipmentShown}
          currShipmentId={currShipmentId}
          currAreaCode={currAreaCode}
          fulfilled={fulfilled}
        />
      ) : (
        <Shipments
          setSingleShipmentShown={setSingleShipmentShown}
          setCurrShipmentId={setCurrShipmentId}
          setCurrAreaCode={setCurrAreaCode}
          setFulfilled={setFulfilled}
        />
      )}
    </>
  );
}

export default ShipmentsPage;
