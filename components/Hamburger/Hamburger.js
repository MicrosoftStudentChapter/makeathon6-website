"use client"

import React, { useState } from 'react';
import styles from './Hamburger.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Hamburger({ isSpecialPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [bgBlur, setBgBlur] = useState("transparent")
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setRotationAngle(rotationAngle + 180);
    setBgBlur(isMenuOpen ? "transparent" : "rgb(0 0 0 / 78%)");
    setIsOpen(!isOpen);

  };


  return (
    <>
      {!isSpecialPage && <div className={`${styles.menu} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>}

      {isSpecialPage &&
        typeof window !== 'undefined' &&
        window.innerWidth < 450 &&
        <div className={`${styles.menu} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>}
      {/* {!isSpecialPage && <Image
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
        />}
        
        {isSpecialPage && 
        typeof window !== 'undefined' && 
        window.innerWidth < 450 &&
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
        />} */}
      {isMenuOpen && <div className={`${styles.HamburgerMain} ${isSpecialPage ? styles.specialPage : ''}`} style={{
        backgroundColor: bgBlur,
        // transition: 'all 0.3s ease'


      }}>
        <div className={`${styles.hamburger} ${isMenuOpen ? styles.show : ''} `}>
          <div className={styles.buttons}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <div className={`${styles.slideOut1} ${styles.hbBtn}`}>
                <h1 classname={styles.pointer}>Home</h1>
              </div>
            </Link>
            <Link href="/about" style={{ textDecoration: "none " }}>
              <div className={`${styles.slideOut2} ${styles.hbBtn}`}>
                <h1 classname={styles.pointer}>About</h1>
              </div>
            </Link>
            <Link href="#" style={{ textDecoration: "none" }}>
              <div className={`${styles.slideOut3} ${styles.hbBtn}`}>
                <h1 classname={styles.pointer}>Tracks</h1>
              </div>
            </Link>
            <Link href="/sponsors" style={{ textDecoration: "none" }}>
              <div className={`${styles.slideOut4} ${styles.hbBtn}`}>
                <h1 classname={styles.pointer}>Sponsors</h1>
              </div>            </Link>
            <Link href="#" style={{ textDecoration: "none" }}>
              <div className={`${styles.slideOut5} ${styles.hbBtn}`}>
                <h1 classname={styles.pointer}>Timeline</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>}
    </>
  );
}

export default Hamburger;
