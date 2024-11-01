import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'
import HomeButton from '@/components/button/button'
// import HologramThrone from '@/components/animation/animation'
import Hamburger from '@/components/Hamburger/Hamburger'
import Script from 'next/script';
import { DownloadApk } from './downloadapk'

export default function HomePage(){
    return (
        <>
            <Hamburger isSpecialPage={true}/>
      {/* <div className={styles.applyButton}> */}
        {/* <Link href="https://drive.google.com/drive/folders/1uq5cZVh4UmmjikbQh-3M4khZc5t948WX?usp=drive_link" style={{textDecoration: "none"}}> */}
        {/* <div className={styles.offlineApply}
        style={{height: "44px", width: "312px"}}
        onClick={DownloadApk}
        >
          Download the App!
        </div> */}
        {/* </Link> */}
        {/* <Script src="https://apply.devfolio.co/v2/sdk.js" async={true} defer={true} />
          <div 
              className="apply-button"
              data-hackathon-slug="makeathon6" 
              data-button-theme="light"
              style={{height: "44px", width: "312px"}}
          ></div>

      </div> */}
      {/* <HologramThrone /> */}
      <div className={styles.home}>
        <div>
      <Image src="/bgFinal.png" fill style={{objectFit:"cover"}}/>
      </div>
        <Image src="/MLSClogo.png" height={500} width={500} alt="error" className={styles.logo} />
        <Image src="/About/MLSC-logo.png" height={500} width={500} alt="error" className={styles.logo_new} />
        <Image src="/throneFinal.png" height={500} width={500} alt="error" className={styles.throne} />
        {/* <Image src="/throneFinal.png" height={500} width={500} alt="error" className={styles.throne} /> */}

        <div className={styles.allButtons}>
          <div className={styles.parallelBtns}>
            <div className={styles.row2}>
              <div className={styles.animation}>
                <Link href="/about" style={{textDecoration: "none"}}>
                <div className={styles.tiltHomeLeft2}>
                  <HomeButton title="About" description="description" />
                </div>
                </Link>
              </div>
              <div className={styles.animation}>
                <Link href="/sponsors" style={{textDecoration: "none"}}>
                <div className={styles.tiltHomeRight2}>
                  <HomeButton title="Sponsors" description="description" />
                </div>
                </Link>
              </div>
            </div>

            <div className={styles.row3}>
              <div className={styles.animation}>
                <Link href="/tracks" style={{textDecoration: "none"}}>
                <div className={styles.tiltHomeLeft3}>
                  <HomeButton title="Tracks" description="description"/>
                </div>
                </Link>
              </div>
              <div className={styles.animation}>
                <Link href="/timeline" style={{textDecoration: "none"}}>
                <div className={styles.tiltHomeRight3}>
                  <HomeButton title="Timeline" description="description"/>
                </div>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}