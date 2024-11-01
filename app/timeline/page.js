"use client";

import styles from "./timeline.module.css";
import Image from "next/image";
import astrolab from "./assets/astroimg.png";
import astroframe from "/public/timeline/astroframe.svg";
import astrotrail from "./assets/trail.svg";
import ell29 from "./assets/ell29.svg";
import ell30 from "./assets/ell30.svg";
import ell31 from "./assets/ell31.svg";
import ell32 from "./assets/ell32.svg";
import ell33 from "./assets/ell33.svg";
import ell34 from "./assets/ell34.svg";
import ell35 from "./assets/ell35.svg";
import ell36 from "./assets/ell36.svg";
import Bg from "./particles.js";



import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

import { headings , content } from "./data";
import { useState } from "react";
const rotations = [0, 13, 27, 40, 54, 66, 82, 98, 115];
import Hamburger from "@/components/Hamburger/Hamburger";

export default function Page() {
  const { scrollYProgress } = useScroll();

  const changetracker = useTransform(
    scrollYProgress,
    [0, 0.13, 0.26, 0.39, 0.52, 0.65, 0.78, 0.88, 0.95],
    [0, 1, 2, 3, 4, 5, 6, 7, 8]
  );

  
  useMotionValueEvent(changetracker, "change", (latest) => {
    console.log("latest value" + Math.round(latest * 10));
      
    setGlowIndex( Math.round(latest))
    setCi(Math.round(latest));
    // if(Math.round(latest*10)%2===0)
    // {

    // //   setCi((prevCi) => (prevCi + 1) % 5);

    // }
  });

  const [ci, setCi] = useState(0);
  date();

  const [glowIndex, setGlowIndex] = useState(0);

  return (
    <>
    <div style={{width: '100vw', display:'flex', justifyContent: 'center'}}>
      <h1 style={{zIndex:100, color:'white',position:'absolute',textAlign: 'center', marginTop: '20px'}}>
        TimeLine Coming Soon
      </h1>
    </div>
    <Hamburger/>
    <div style={{height:'100vh'}}>
    <div style={{position:'sticky', top:'0px'}} className={styles.bgbox}>
      <Bg style={{zIndex:0}}/>      
      {/* <div className={styles.astrobox}>
        <div id={styles.imgbox}>
          <Bg />
          <div>
            <h1>
              TimeLine Coming Soon
            </h1>
          </div>
          <div className={styles.stackbox}>
            <Image src={astrolab} className={styles.astroimage} />
            <motion.img 
            src={astroframe} 
            className={styles.astroimage2} 
            animate={{ rotate: rotations[ci] }} 
             /> /}
              {/ 
             <motion.div  style ={{height:'200px'}} animate={{ rotate: rotations[ci] }} >
                  <Image src={astroframe} className={styles.astroimage2} />
                </motion.div>

               <motion.div animate={{ rotate: rotations[ci] }} className={styles.framediv} >
                <Image src={astroframe} className={styles.astroimage2} />
              </motion.div>

            <Image className={styles.astroimage3} src={astrotrail}/>
            <Image src={ell29} className={`${styles.astroimage4} ${glowIndex===0?styles.hoverglow:''} ${styles.ripple}`} />
            <Image src={ell30} className={`${styles.astroimage5} ${glowIndex===1?styles.hoverglow:''} ${styles.ripple}`} />
            <Image src={ell31} className={`${styles.astroimage6} ${glowIndex===2?styles.hoverglow:''} ${styles.ripple}`} />
            <Image src={ell32} className={`${styles.astroimage7} ${glowIndex===3?styles.hoverglow:''} ${styles.ripple}`} />
            <Image src={ell33} className={`${styles.astroimage8} ${glowIndex===4?styles.hoverglow:''} ${styles.ripple}`}/>
            <Image src={ell34} className={`${styles.astroimage9} ${glowIndex===5?styles.hoverglow:''} ${styles.ripple}`} />
            <Image src={ell35} className={`${styles.astroimage10} ${glowIndex===6?styles.hoverglow:''} ${styles.ripple}`} />
            <Image src={ell36} className={`${styles.astroimage11} ${glowIndex===7?styles.hoverglow:''} ${styles.ripple}`} />
            <Image src={ell36} className={`${styles.astroimage12} ${glowIndex===8?styles.hoverglow:''} ${styles.ripple}`} />
            <p className={styles.parag}>{date()}</p>
          </div>
        </div>
         <div className={styles.textbox}>
          <motion.div onClick={()=>{
            setCi((ci + 1) % 5)
          }} className={styles.mikibox}>
            <motion.h1
              key = {headings[ci]}
              initial={{ y : 50}}
              animate={{ y : 0 }}
              className={styles.heading}
            >
             {headings[ci]}
            </motion.h1>
          </motion.div>
          <motion.div  key = {headings[ci]} initial={{ y : 100}}
              animate={{ y : 0 }} 
              transition={{duration:0.3}}
              className={styles.minibox}>
            <span className={styles.para}> {content[0][ci]} <br></br> <br></br>  {content[1][ci]} </span>
            <ul className={styles.para}>
              <li>
                Voluptate exercitation aliquip pariatur in voluptate duis esse
                irure occaecat. Cillum dolore velit occaecat aute duis dolor.
                Duis qui id aliquip cillum incididunt in. Nisi mollit do nostrud
                sunt Lorem ullamco cillum fugiat ut sint. Aute laboris
                incididunt elit et anim..
              </li>
              <li>
                Veniam cupidatat commodo elit pariatur adipisicing. Adipisicing
                esse in dolore excepteur. Deserunt magna eiusmod culpa mollit
                duis.
              </li>
             
            </ul>
          </motion.div>
        </div> 
      </div> */}
    </div>
    </div>
    </>
  );
}

function date() {
  const now = new Date();
  const date = now.getDate();
  const time = now.toLocaleTimeString();
  const year = now.getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var month = months[now.getMonth()];
  return `${month} ${date}'${year} `;
}