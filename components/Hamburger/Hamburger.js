"use client"

import React, { useState } from 'react';
import styles from './Hamburger.module.css';
import Image from 'next/image';

function Hamburger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [bgBlur, setbgBlur] = useState("transparent")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setRotationAngle(rotationAngle + 180);
    if (isMenuOpen) {

      setbgBlur("transparent");
    } else {

      setbgBlur("rgb(0 0 0 / 66%)");
    }
  };


  return (
    <>
      <div className={styles.HamburgerMain} style={{
        backgroundColor: bgBlur,
        transition: 'all 0.3s ease'
      }}>

        <Image
          src="/dragon.png"
          height={50}
          width={50}
          alt='error'
          className={styles.menu}
          style={{
            transform: `rotate(${rotationAngle}deg)`,
            transition: 'transform 0.5s ease',
          }}
          onClick={toggleMenu}
        />
        <div className={`${styles.hamburger} ${isMenuOpen ? styles.show : ''}`}>
          <div className={styles.buttons}>
            <h1>Home</h1>
            <h1>about</h1>
            <h1>timeline</h1>
            <h1>sponsors</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hamburger;
