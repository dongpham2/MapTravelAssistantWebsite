import React, { useEffect, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import CardMap from "../CardMap/CardMap";

const markerIc = new L.Icon({
  iconUrl: require("../../../../../assets/images/icon/iconmap3.png"),
  iconSize: [35, 35],
});

// const position = [51.505, -0.09];
const position = [16.054407, 108.202164];

function ResetCenterView(props) {
  const { selectPosition } = props;
  const map = useMap();

  useEffect(() => {
    if (selectPosition) {
      map.setView(
        L.latLng(selectPosition?.lat, selectPosition?.lon),
        map.getZoom(),
        {
          animate: true,
        }
      );
    }
  }, [selectPosition]);

  return null;
}

export default function Maps(props) {
  const { selectPosition, isPosition } = props;
  const locationSelection = [selectPosition?.lat, selectPosition?.lon];
  const positions = [
    [16.059799, 108.209244],
    [16.06326, 108.20876],
  ];
  const popupRef = useRef();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (popupRef.current) {
        popupRef.current.options.autoClose = true;
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return (
    // <MapContainer
    //   center={position}
    //   zoom={8}
    //   style={{ width: "100%", height: "100%" }}
    // >
    //   <TileLayer
    //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //     url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key={YOU_KEY}"
    //   />
    //   {selectPosition && (
    //     <Marker position={locationSelection} icon={icon}>
    //       <Popup>
    //         A pretty CSS3 popup. <br /> Easily customizable.
    //       </Popup>
    //     </Marker>
    //   )}
    //   <ResetCenterView selectPosition={selectPosition} />
    // </MapContainer>
    !isPosition ? (
      <MapContainer center={position} zoom={15} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {selectPosition ? (
          <Marker position={locationSelection} icon={markerIc}>
            <Popup autoPan={true} ref={popupRef}>
              {/* <CardMap position={locationSelection} /> */}
            </Popup>
          </Marker>
        ) : (
          <></>
        )}

        <ResetCenterView selectPosition={selectPosition} />
      </MapContainer>
    ) : (
      <MapContainer center={position} zoom={15} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {selectPosition ? (
          <Marker position={locationSelection} icon={markerIc}>
            <Popup autoPan={true} ref={popupRef}>
              <CardMap position={locationSelection} />
            </Popup>
          </Marker>
        ) : (
          positions &&
          positions.map((location) => {
            return (
              <Marker position={location} icon={markerIc}>
                <Popup autoPan={true} ref={popupRef}>
                  <CardMap position={location} />
                </Popup>
              </Marker>
            );
          })
        )}

        <ResetCenterView selectPosition={selectPosition} />
      </MapContainer>
    )
    // <MapContainer center={position} zoom={15} scrollWheelZoom={true}>
    //   <TileLayer
    //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //   />
    //   {selectPosition ? (
    //     <Marker position={locationSelection} icon={markerIc}>
    //       <Popup autoPan={true} ref={popupRef}>
    //         <CardMap position={locationSelection} />
    //       </Popup>
    //     </Marker>
    //   ) : (
    //     positions &&
    //     positions.map((location) => {
    //       return (
    //         <Marker position={location} icon={markerIc}>
    //           <Popup autoPan={true} ref={popupRef}>
    //             <CardMap position={location} />
    //           </Popup>
    //         </Marker>
    //       );
    //     })
    //   )}

    //   <ResetCenterView selectPosition={selectPosition} />
    // </MapContainer>
  );
}
