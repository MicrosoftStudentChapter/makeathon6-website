"use client"
import React, { useState } from 'react';
import styles from './tracks.module.css';
import Content from './data.json';

export default function Page() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleGoBack = () => {
    setSelectedEvent(null);
  };

  const generateEventDiv = (event) => {
    const { id, title, description } = event;
    return (
      <div key={id} className={styles.Ev} onClick={() => handleEventClick(event)}>
        <h1 className={styles.heading}>{title}</h1>
        <p className={styles.para}>{description}</p>
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
          <div className={`${styles.popup} ${styles.popup.active}`}>
            <h1>Brief:</h1>
            <p>{selectedEvent.brief}</p>
            <h1>Problem statements:</h1>
            <ul>
              <li>{selectedEvent.problem_line1}</li><p></p>
              <li>{selectedEvent.problem_line2}</li><p></p>
              <li>{selectedEvent.problem_line3}</li><p></p>
              <li>{selectedEvent.problem_line4}</li><p></p>
            </ul>
            <div className={styles.center}>
            <button className={styles.btn} onClick={handleGoBack}>
              X
            </button>
            </div>
          </div>
        </div>
        </>
      )}
    </>
  );
}