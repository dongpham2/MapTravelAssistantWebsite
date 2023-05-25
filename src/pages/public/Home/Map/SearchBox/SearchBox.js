import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./SearchBox.module.scss";
import { OutlinedInput } from "@material-ui/core";
import List from "@material-ui/core/List";
import ButtonBase from "@material-ui/core/ButtonBase";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
const icon = require("../../../../../assets/images/icon/iconmap3.png");
const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
  q: "",
  format: "json",
  addressdetails: "addressdetails",
};

const cx = classNames.bind(styles);
export default function SearchBox(props) {
  const { selectPosition, setSelectPosition } = props;
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <OutlinedInput
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
          className={cx("search-input")}
          placeholder="Search..."
          style={{ fontSize: "15px" }}
        />
        <div className={cx("search-btn")}>
          <ButtonBase
            variant="contained"
            className={cx("search-btn")}
            onClick={() => {
              // Search
              const params = {
                q: searchText,
                format: "json",
                addressdetails: 1,
                polygon_geojson: 0,
              };
              const queryString = new URLSearchParams(params).toString();
              const requestOptions = {
                method: "GET",
                redirect: "follow",
              };
              fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
                .then((response) => response.text())
                .then((result) => {
                  setListPlace(JSON.parse(result));
                })
                .catch((err) => console.log("err: ", err));
            }}
          >
            <ion-icon name="search-outline"></ion-icon>
          </ButtonBase>
        </div>
      </div>
      <div className={cx("list-search")}>
        <List component="nav" aria-label="main mailbox folders">
          {listPlace.map((item, index) => {
            if (index < 50)
              return (
                <div key={item?.place_id}>
                  <ListItem
                    button
                    onClick={() => {
                      setSelectPosition(item);
                    }}
                  >
                    <ListItemIcon>
                      <img
                        src={icon}
                        alt="Placeholder"
                        style={{ width: 38, height: 38 }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={item?.display_name} />
                  </ListItem>
                  <Divider />
                </div>
              );
          })}
        </List>
      </div>
    </div>
  );
}
