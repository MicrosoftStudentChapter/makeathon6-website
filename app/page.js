
// "use client"

import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'
import HomeButton from '@/components/button/button'
import HologramThrone from '@/components/animation/animation'
import Hamburger from '@/components/Hamburger/Hamburger'

export default function Home() {
  return (
    <>
      <Hamburger />
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
                  <HomeButton title="Tracks" description="description" />
                </div>
                </Link>
              </div>
              <div className={styles.animation}>
                <Link href="timeline" style={{textDecoration: "none"}}>
                <div className={styles.tiltHomeRight3}>
                  <HomeButton title="Timeline" description="description" />
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

