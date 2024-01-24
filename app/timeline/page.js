import styles from './timeline.module.css'
import Image from 'next/image'
import astrolab from "./assets/astroimg.png"
import astroframe from "./assets/astroframe.svg"
import astrotrail from "./assets/trail.svg"
import ell29 from "./assets/ell29.svg"
import ell30 from "./assets/ell30.svg"
import ell31 from "./assets/ell31.svg"
import ell32 from "./assets/ell32.svg"
import ell33 from "./assets/ell33.svg"
import ell34 from "./assets/ell34.svg"
import ell35 from "./assets/ell35.svg"
import ell36 from "./assets/ell36.svg"
import Bg from './particles.js'



export default function Page() {
    date();
    return( 
        
            
    <div className={styles.bgbox}>
   
        
        <div className={styles.astrobox}> 
        
        <div id={styles.imgbox}>
        <Bg />
            <div className={styles.stackbox}>
            
                <Image src={astrolab} className={styles.astroimage} />
                <Image src = {astroframe} className={styles.astroimage2} />
                <Image src = {astrotrail} className={styles.astroimage3} />
                <Image src={ell29} className={styles.astroimage4} />
                <Image src={ell30} className={styles.astroimage5} />
                <Image src={ell31} className={styles.astroimage6} />
                <Image src={ell32} className={styles.astroimage7} />
                <Image src={ell33} className={styles.astroimage8} />
                <Image src={ell34} className={styles.astroimage9} />
                <Image src={ell35} className={styles.astroimage10} />
                <Image src={ell36} className={styles.astroimage11} />
                
            </div>
     
            <p className={styles.para}>{date()}</p>
        </div>
        <div className={styles.textbox}>
            <div className={styles.mikibox}>
                <h1 className={styles.heading}>Heading goes here</h1>
            </div>
            <div className={styles.minibox}>
                <ul className={styles.para}>  
                    <li>shjdkhdahs</li>
                    <li>jhASJHSADASHDJHAGJHD</li>
                    <li>shjdkhdahs</li>
                    <li>jhASJHSADASHDJHAGJHD</li>
                    <li>shjdkhdahs</li>
                    <li>jhASJHSADASHDJHAGJHD</li>
                </ul>
            </div>
            </div>
            
        </div>
    </div>
    
    )
  }

function date(){
const now = new Date();
const date = now.getDate();
const time = now.toLocaleTimeString();
const year = now.getFullYear();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = months[now.getMonth()];
return (`${month} ${date}'${year} `);


};

