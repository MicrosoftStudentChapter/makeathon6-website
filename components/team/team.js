import React, { useState } from "react";
import styles from "./chulo.module.css";
import { Shakle } from "./shakle/shakle.js";
import Marquee from "react-fast-marquee";
import Stack from "@mui/material/Stack";
import data from "./data.json";
import { Jura } from "next/font/google";
const jura = Jura({ subsets: ["latin"] });

export const ChuLo = () => {
  const [name, setName] = useState("MLSC");
  return (
    <div className={styles.wrapper}>
      <div className={styles.slider} style={{ fontFamily: jura.css }}>
        {/* Apply Jura font to the slider */}
        <div className={styles.eb}>EXECUTIVE BOARD</div>
        <Marquee pauseOnHover="true" gradientWidth={0} speed={105} style={{ padding: "2.2vh" }}>
          <Stack direction="row">
            {data["secretaries"].map((index) => (
              <Shakle
                key={index.id}
                changeName={setName}
                image={index.img}
                name={index.name}
              />
            ))}
            {data["heads"].map((index) => (
              <Shakle
                key={index.id}
                changeName={setName}
                image={index.img}
                name={index.name}
              />
            ))}
          </Stack>
        </Marquee>
        <div className={styles.withLove}>Made With ❤️ by MLSC</div>
        <Marquee pauseOnHover="true" gradientWidth={0} speed={105} style={{ padding: "2.5vh", alignitems: "center" }}>
          <Stack direction="row">
            {data["coordinators"].map((index) => (
              <Shakle
                key={index.id}
                changeName={setName}
                image={index.img}
                name={index.name}
                black={index?.black}
              />
            ))}
          </Stack>
        </Marquee>
      </div>
    </div>
  );
};
