import Image from 'next/image'
// import img from './images/bg.png'
import styles from './page.module.css'
import HomeButton from '@/components/button/button'
// import logo from './images/MLSClogo.png'
// import img from '/'
export default function Home() {
  return (
    <>


      <div className={styles.home}>

        <Image src="/throne.png" height={500} width={500} alt="hello" className={styles.throne}/>
        {/* <Image src="/MLSClogo.png" width={7000} height={40} className={styles.logo}/> */}
        
        <div className={styles.allButtons}>
{/* 
          <div className={styles.row1}>
            <div className={styles.tiltHomeLeft1}><HomeButton title="ABOUT" description="description" />
            </div>
            <div className={styles.tiltHomeRight1}><HomeButton title="ABOUT" description="description" /></div>
          </div> */}


        <div className={styles.parallelBtns}>

          <div className={styles.row2}>
            <div className={styles.tiltHomeLeft2}><HomeButton title="ABOUT" description="description" />
            </div>
            <div className={styles.tiltHomeRight2}><HomeButton title="ABOUT" description="description" /></div>
          </div>



          <div className={styles.row3}>
            <div className={styles.tiltHomeLeft3}><HomeButton title="ABOUT" description="description" /></div>
            <div className={styles.tiltHomeRight3}><HomeButton title="ABOUT" description="description" /></div>
          </div>

        </div>

        </div>

        {/* <div className={styles.logo}><img src='https://drive.google.com/drive/my-drive?q=after:2024-01-17%20parent:0AP5-qxORQB99Uk9PVA'></img></div> */}
      </div>
    </>
  )
}