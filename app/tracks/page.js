"use client";
import React, { useState } from "react";
import styles from "./tracks.module.css";
import Content from "./data.json";
import Image from "next/image";
// import { Footer } from "../../components/footer/Footer";
// import Hamburger from "@/components/Hamburger/Hamburger";

import { motion } from "framer-motion";
import { cantebutry } from "@/components/font/myfont";

const variants = {
  hidden: {  y: 50 },
  visible: { y: 0, transition: { staggerChildren: 0.3 } },
};

export default function Page() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    document.body.style.overflow="hidden";//to prevent behind page from scrolling when popup is opened
  };

  const handleGoBack = () => {
    setSelectedEvent(null);
    document.body.style.overflow="auto";//to revert the overflow changes when popup is closed
  };

  const generateEventDiv = (event , index) => {
    const { id, title, description, image } = event;
    return (
      <motion.div

        initial= {{ opacity: 0 , y: 80+index*80 }}
          animate={{ opacity:1 , y: 0, transition: { delay : index*0.05, duration: 0.1+index*0.1} }}
        key={id}
        className={styles.Ev}
        onClick={() => handleEventClick(event)}
        
      >
        <div className={styles.eventContent}>
          <h1 className={`${styles.heading} ${cantebutry.className}`}>{title}</h1>
          {/* <p className={styles.para}>{description}</p>
           This had the description on the card face;now removed due to poor visuals */}
        </div>
        <div className={styles.eventImage}>
          <Image
            className={styles.pointer}
            src={image}
            alt={title}
            height={455}
            width={270}
            style={{ borderRadius: "5px" }}
          />
        </div>
      </motion.div>
    );
  };
  
  
  return (
    <>
      {/* <Hamburger /> */}
      <div className={styles.main}>
        <h1 className={`${cantebutry.className} ${styles.mainheading}`}>Tracks</h1>
        <motion.div
          className={styles.container}
        >
          {Content.map((event , index) => generateEventDiv(event , index))}
        </motion.div>
      </div>
      <div>
        {/* <Footer /> */}
      </div>
      {selectedEvent && (
        <>
          <div className={styles.overlay}>
            <div className={styles.popup}>
              <div className={styles.flex}>
                <div className={styles.popupimage}>
                  <div className={styles.card}>
                    <Image className={styles.ok}
                      src={selectedEvent.image}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
                <div className={styles.content}>
                  <h1 className={styles.spacing2}>Brief:</h1>
                  <p className={styles.spacing2}>{selectedEvent.brief}</p>
                  <h1 className={styles.spacing2}>Problem statements:</h1>
                  <ul>
                    <li className={styles.spacing1}>
                      {selectedEvent.problem_line1}
                    </li>
                    {/* Remove this comment to add more problem statements */}

                    {/* <p></p>
                    <li className={styles.spacing1}>
                      {selectedEvent.problem_line2}
                    </li>
                    <p></p>
                    <li className={styles.spacing1}>
                      {selectedEvent.problem_line3}
                    </li>
                    <p></p> */}
                  </ul>
                </div>
              </div>
              <button className={styles.btn} onClick={handleGoBack}>
                X
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
  
}
