import React, { useState } from "react";
import Maps from "./Leaflet/LeafletMap";
import SearchBox from "./SearchBox/SearchBox";

export default function Map(setChildClick) {
  // const positions = [
  //   [16.059799, 108.209244],
  //   [16.059031, 108.207397],
  // ];
  // const position = [16.054407, 108.202164];

  const [selectPosition, setSelectPosition] = useState(null);
  return (
    <div>
      {/* <SearchBox
        selectPosition={selectPosition}
        setSelectPosition={setSelectPosition}
      /> */}
      <Maps selectPosition={selectPosition} isPosition={true} />
      {/* <SearchBox /> */}
      {/* <MapContainer center={position} zoom={15} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {positions &&
          positions.map((location) => {
            return (
              <Marker position={location} icon={markerIc}>
                <Popup>
                  <CardMap />
                </Popup>
              </Marker>
            );
          })}
      </MapContainer> */}
    </div>
  );
}
