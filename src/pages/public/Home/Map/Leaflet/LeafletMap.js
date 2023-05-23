import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import CardMap from "../CardMap/CardMap";
import { useDispatch } from "react-redux";
import { actionGetAllFangpage } from "src/redux/actions/fanpage";
import { Row } from "react-bootstrap";

const markerIc = new L.Icon({
  iconUrl: require("../../../../../assets/images/icon/iconmap3.png"),
  iconSize: [50, 50],
});

// const position = [51.505, -0.09];
const center = [16.054407, 108.202164];

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
  const [positions, setPositions] = useState([]);
  const [dataRender, setDataRender] = useState([]);
  const [dataFanpage, setDataFanpage] = useState([]);
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const dispatch = useDispatch();

  // const positions = [
  //   [16.059799, 108.209244],
  //   [16.06326, 108.20876],
  // ];
  const popupRef = useRef();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (popupRef.current) {
        popupRef.current.options.autoClose = true;
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    dispatch(
      actionGetAllFangpage({
        callBack(data) {
          if (data.message === "GET SUCCESSFUL") {
            const result = data.data;
            // console.log("2", result);
            const positions = [];
            const dataRender = [];
            setDataFanpage(result);
            result.map((item) => {
              positions.push([+item?.location?.lat, +item?.location?.lon]);
            });
            setPositions(positions);
          }
        },
      })
    );
  }, []);
  useEffect(() => {
    const a = document.querySelectorAll(".leaflet-marker-icon");
    // console.log(a);
    // a.map((item) => {
    //   item.click();
    // });
  }, []);
  return !isPosition ? (
    <MapContainer center={center} zoom={15} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {selectPosition ? (
        <Marker position={locationSelection} icon={markerIc}>
          {/* <Popup autoPan={true} ref={popupRef}></Popup> */}
        </Marker>
      ) : (
        <></>
      )}

      <ResetCenterView selectPosition={selectPosition} />
    </MapContainer>
  ) : (
    <MapContainer center={center} zoom={15} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {selectPosition ? (
        <Marker position={locationSelection} icon={markerIc} ref={markerRef}>
          <Popup autoPan={true} ref={popupRef}>
            <CardMap position={locationSelection} />
          </Popup>
        </Marker>
      ) : (
        positions &&
        positions.map((location, index) => {
          return (
            // <div ref>
            <Marker
              position={location}
              icon={markerIc}
              ref={markerRef}
              key={index}
            >
              <Popup autoPan={true}>
                {dataFanpage.map((data, i) => (
                  <Row xs={12} key={i}>
                    <CardMap position={locationSelection} data={data} />
                  </Row>
                ))}
              </Popup>
            </Marker>
            // </div>
          );
        })
      )}
      <ResetCenterView selectPosition={selectPosition} />
    </MapContainer>
    // <></>
  );
}
