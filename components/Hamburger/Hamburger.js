"use client"

import React, { useState } from 'react';
import styles from './Hamburger.module.css';
import Image from 'next/image';
import Link from 'next/link';

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
          <Link href="/" style={{textDecoration: "none"}}>
            <h1>Home</h1>
          </Link>
          <Link href="/about" style={{textDecoration: "none "}}>
            <h1>About</h1>
          </Link>
          <Link href="/timeline" style={{textDecoration: "none"}}>
            <h1>Timeline</h1>
          </Link>
          <Link href="/sponsors" style={{textDecoration: "none"}}>
            <h1>Sponsors</h1>
          </Link>
          <Link href="/tracks" style={{textDecoration: "none"}}>
          <h1>Tracks</h1>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hamburger;
