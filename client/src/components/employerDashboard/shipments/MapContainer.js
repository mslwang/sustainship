import React from "react";
import { GoogleMap, LoadScript , Marker} from "@react-google-maps/api";

const containerStyle = {
  width: "500px",
  height: "350px",
  marginRight: "5vh",
  marginLeft: "0",
};

const center = {
  lat: 43.8561,
  lng: -79.337,
};

const center2 = {
  lat: 43.8961,
  lng: -79.337,
};


const center3 = {
  lat: 43.8461,
  lng: -79.397,
};

const center4 = {
  lat: 43.7761,
  lng: -79.457,
};
const center5 = {
  lat: 43.8545,
  lng: -79.237,
};


const onLoad = marker => {
  console.log('marker: ', marker)
}

function MapContainer() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCGNNwB07zP8IXwhxRJH82HYopBtFqzOxw">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10.5}>
        {/* Child components, such as markers, info windows, etc. */}
        <Marker onLoad={onLoad} position={center} />

        <Marker onLoad={onLoad} position={center2} />
        <Marker onLoad={onLoad} position={center3} />

        <Marker onLoad={onLoad} position={center4} />

        <Marker onLoad={onLoad} position={center5} />

        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MapContainer);
