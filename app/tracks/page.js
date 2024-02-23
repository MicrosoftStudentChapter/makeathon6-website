"use client";
import React, { useEffect, useState } from "react";
import styles from "./tracks.module.css";
import Content from "./data.json"; 
import Image from "next/image";
// import { Footer } from "../../components/footer/Footer";
// import Hamburger from "@/components/Hamburger/Hamburger";

import { motion } from "framer-motion";
import { cantebutry, myFont, myFontBold } from "@/components/font/myfont";
import { Jura } from "next/font/google";

const variants = {
  hidden: {  y: 50 },
  visible: { y: 0, transition: { staggerChildren: 0.3 } },
};

export default function Page() {
  
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        handleGoBack();
      }
    };

    if (selectedEvent) {
      document.addEventListener("keydown", handleKeyPress);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [selectedEvent]);

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
          <h1 className={`${styles.heading} ${myFontBold.className}`}>{title}</h1>
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
  
  const ProblemStatement = ({ statement, ds, rs }) => {
    return (
      <li className={styles.spacing1}>
        {statement}
        <br/>
        {ds && ds.map((dataset, index) => (
          <React.Fragment key={index}>
            {index > 0 && <br />}
            <a href={dataset} target="_blank" rel="noopener noreferrer">
              <button
                style={{
                  fontSize: "1.1rem",
                  padding: "0.5rem 1rem",
                  borderRadius: "5px",
                  backgroundColor: "#f5f5f5",
                  border: "none",
                  cursor: "pointer",
                  marginTop: "1rem",
                }}
              >
                {ds.length > 1 ? `Dataset ${index + 1}`: "Dataset"}
              </button>
            </a>
          </React.Fragment>
        ))}
        {rs && <br />}
        {rs && rs.map((reference, index) => (
          <React.Fragment key={index}>
            {index > 0 && <br />}
            <a href={reference} target="_blank" rel="noopener noreferrer">
              <button
                style={{
                  fontSize: "1.1rem",
                  padding: "0.5rem 1rem",
                  borderRadius: "5px",
                  backgroundColor: "#f5f5f5",
                  border: "none",
                  cursor: "pointer",
                  marginTop: "1rem",
                }}
              >
                {rs.length > 1 ? `Reference ${index + 1}` : "Reference"}
              </button>
            </a>
          </React.Fragment>
        ))}
      </li>
    );
  };
  
  return (
    <>
      {/* <Hamburger /> */}
      <div className={styles.main}>
        <h1 className={`${myFontBold.className} ${styles.mainheading}`}>Tracks</h1>
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
                    {Array.from({ length: 5 }, (_, i) => {
                      const problemLine = selectedEvent[`problem_line${i + 1}`];
                      const ds = selectedEvent[`ds${i + 1}`];
                      const rs = selectedEvent[`rs${i + 1}`];
                      return (
                        problemLine && (
                          <ProblemStatement
                            statement={problemLine}
                            ds={ds}
                            key={i}
                            rs={rs}
                          />
                        )
                      );
                    })}
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
