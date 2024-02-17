// Inside Shakle.js

import React, { useState } from "react";
import styles from "./shakle.module.css";
import Avatar from "@mui/material/Avatar";

export function Shakle(prop) {
  const [hovered, setHovered] = useState(false);

  function handleChange() {
    prop.changeName(prop.name);
    setHovered(true);
  }

  function setMLSC() {
    prop.changeName("MLSC");
    setHovered(false);
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
            width: "5rem",
            height: "5rem",
            borderRadius: "50%",
            borderStyle: "solid",
            borderColor: "white",
            margin: "0 0.7rem",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: hovered ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.1s ease",
            // "&:hover": {
            //   opacity: 1,
            //   transition: "opacity 250ms ease-in-out",
            //   Filter: `${prop.black ? "brightness(0%)" : "grayscale(0%)"}`,
            //   WebkitFilter: `${
            //     prop.black ? "brightness(0%)" : "grayscale(0%)"
            //   }`,
            //   borderColor: "#FFCF9C",
            //   bgcolor: `${prop.black ? "black" : ""}`,
            // },
            // opacity: 0.7,
            // Filter: "grayscale(100%)",
            // WebkitFilter: "grayscale(100%)",
          }}
          alt="Card Photo"
          src={prop.image}
        />
        {hovered && <div className={styles.name}>{prop.name}</div>}
      </div>
    </div>
  );
}
