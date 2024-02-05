"use client"
import React from "react";
import styles from "./shakle.module.css";
import Avatar from "@mui/material/Avatar";

export function Shakle(prop) {
  function handleChange() {
    prop.changeName(prop.name);
  }

  function setMLSC() {
    prop.changeName("MLSC");
  }

  return (
    <div
      onMouseOver={handleChange}
      onMouseOut={setMLSC}
      className={styles.wrapper}
    >
      <div className={styles.wrapperInner}>
        <Avatar
          sx={{
            width: "4rem",
            height: "4rem",
            borderRadius: "50%",
            borderStyle: "solid",
            borderColor: "white",
            margin: "0 0.7rem",
            "&:hover": {
              opacity: 1,
              transition: "opacity 250ms ease-in-out",
              Filter: `${prop.black ? "brightness(0%)" : "grayscale(0%)"}`,
              WebkitFilter: `${
                prop.black ? "brightness(0%)" : "grayscale(0%)"
              }`,
              borderColor: "#FFCF9C",
              bgcolor: `${prop.black ? "black" : ""}`,
            },
            opacity: 0.7,
            Filter: "grayscale(100%)",
            WebkitFilter: "grayscale(100%)",
          }}
          alt="Card Photo"
          src={prop.image}
        />
      </div>
    </div>
  );
}
