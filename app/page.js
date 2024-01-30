
// "use client"

import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'
import HomeButton from '@/components/button/button'
import HologramThrone from '@/components/animation/animation'
import Hamburger from '@/components/Hamburger/Hamburger'
// import DevfolioButton from '@/components/devfolioButton/devfolio'
// import Script from 'next/script';
// import dynamic from 'next/dynamic';

// const DynamicClientComponent = dynamic(() => import('../components/devfolioButton/devfolio'), {
//   ssr: false, // Disable server-side rendering
// });
export default function Home() {
  return (
    <>
      {/* <DevfolioButton /> */}
      {/* <DynamicClientComponent /> */}
      <Hamburger />
      {/* <Script src="https://apply.devfolio.co/v2/sdk.js" async={true} defer={true} />
        <div 
            className="apply-button" 
            data-hackathon-slug="makeathon5" 
            data-button-theme="light"
            style={{height: "44px", width: "312px"}}
        ></div> */}
      <HologramThrone />
      <div className={styles.home}>
        <Image src="/MLSClogo.png" height={500} width={500} alt="error" className={styles.logo} />
        <Image src="/throneFinal.png" height={500} width={500} alt="error" className={styles.throne} />

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
                <Link href="#" style={{textDecoration: "none"}}>
                <div className={styles.tiltHomeRight2}>
                  <HomeButton title="Sponsors" description="description" cs = {true}/>
                </div>
                </Link>
              </div>
            </div>

            <div className={styles.row3}>
              <div className={styles.animation}>
                <Link href="#" style={{textDecoration: "none"}}>
                <div className={styles.tiltHomeLeft3}>
                  <HomeButton title="Tracks" description="description" cs = {true}/>
                </div>
                </Link>
              </div>
              <div className={styles.animation}>
                <Link href="#" style={{textDecoration: "none"}}>
                <div className={styles.tiltHomeRight3}>
                  <HomeButton title="Timeline" description="description" cs = {true}/>
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

