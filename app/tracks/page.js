"use client"
import React, { useState } from 'react';
import styles from './tracks.module.css';
import Content from './data.json';
import Image from "next/image";

export default function Page() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleGoBack = () => {
    setSelectedEvent(null);
  };

  const generateEventDiv = (event) => {
    const { id, title, description, image } = event;
    return (
      <div key={id} className={styles.Ev} onClick={() => handleEventClick(event)}>
      <div className={styles.eventContent}>
        <h1 className={styles.heading}>{title}</h1>
        <p className={styles.para}>{description}</p>
      </div>
      <div className={styles.eventImage}>
        <Image src={image} alt={title} height={455} width={250} style={{ borderRadius: '5px' }}/>
      </div>
    </div>
    );
  };

  return (
    <>
      <body className={styles.main}>
        <h1 className={styles.mainheading}>Tracks</h1>
          <div className={styles.container}>
            {Content.map((event) => generateEventDiv(event))}
          </div>
      </body>
      {selectedEvent && (
        <>
          <div className={styles.overlay}>
            <div className={styles.popup}>
              <div className={styles.flex}>
                <div className={styles.popupimage}><div className={styles.card}></div></div>
                <div className={styles.content}>
                  <h1>Brief:</h1>
                  <p>{selectedEvent.brief}</p>
                  <h1>Problem statements:</h1>
                  <ul>
                    <li>{selectedEvent.problem_line1}</li><p></p>
                    <li>{selectedEvent.problem_line2}</li><p></p>
                    <li>{selectedEvent.problem_line3}</li><p></p>
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