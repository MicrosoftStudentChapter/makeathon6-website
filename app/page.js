import Image from 'next/image'
import img from './images/bg.png'
import styles from './page.module.css'
import HomeButton from '@/components/button/button'

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <h1 className={styles.thisH1}>Makeathon 6 </h1>
        <div className={styles.tilthome}><HomeButton title="ABOUT" description="description" />
        </div>

      </div>
    </>
  )
}