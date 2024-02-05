"use client"
import React from 'react';
import Image from 'next/image';
import styles from './crown.module.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { myFont } from '../font/myfont';

function Crown({showContent}) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
useEffect(() => {
    const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearTimeout(timer);
});

function calculateTimeLeft() {
    const difference = +new Date("February 24, 2024") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return timeLeft;
}

    return (
        <>
        
            <div className={styles.main}>

                <div className={styles.crownAni}>
                    <Image src="/starrrr.svg" height={500} width={500} alt="error" className={styles.star} id={styles.star1} />
                    <Image src="/starrrr.svg" height={500} width={500} alt="error" className={styles.star} id={styles.star2} />
                    <Image src="/starrrr.svg" height={500} width={500} alt="error" className={styles.star} id={styles.star3} />
                    <Image src="/starrrr.svg" height={500} width={500} alt="error" className={styles.star} id={styles.star4} />
                    <Image src="/starrrr.svg" height={500} width={500} alt="error" className={styles.star} id={styles.star5} />
                    <Image src="/starrrr.svg" height={500} width={500} alt="error" className={styles.star} id={styles.star6} />
                    <Image src="/starrrr.svg" height={500} width={500} alt="error" className={styles.star} id={styles.star7} />
                    <Image src="/crown.svg" height={500} width={500} alt="error" className={styles.crown} />
                </div>
            </div>
            <div className={styles.CountdownTimer}>
                <h1 className={`${myFont.className} ${styles.h}`}>Makeathon 6 Starts in ...</h1>
                <h2>{timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes {timeLeft.seconds} Seconds</h2>
            </div>
        </>
    );
}

export default Crown;