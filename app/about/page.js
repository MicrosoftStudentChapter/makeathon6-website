import styles from './about.module.css'
import Image from 'next/image'
import MLSC from './assets/MLSC-logo.png'
import Prize from './assets/prize.jpeg'
import Faq from './components/Faq';

export default function Page() {
    return (
    <div>

      <div className={styles.menu}>
        <button className={styles.navButton}>Nav</button>
        <div className={styles.menuContent}>
          <a className={styles.title} href="#">Link 1</a>
          <a className={styles.title} href="#">Link 2</a>
          <a className={styles.title} href="#">Link 3</a>
        </div>
      </div>
      <div className={styles.major}>
        
        <div className={styles.A}>
          <h1 className={styles.thisH1}>About Us</h1>
          <div className={styles.mainbox}>
            <p className={styles.abText1}>about us page text goes here..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. about us page text goes here..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. about us page text goes here..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <p className={styles.abText2}>about us page text goes here..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. about us page text goes here..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. about us page text goes here..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <Image 
            src={MLSC}
            className={styles.logo}
            width={200} 
            height={175} 
            alt="MLSC"
            />
          </div>
        </div>

        <div className={styles.B}>
          <h1 className={styles.thisH1}>Prizes</h1>

          <div className={styles.prizes}>
          <div className={styles.box}>
          <div className={styles.boxcontent}>
            <h2 className={styles.heading}>I Best Hack</h2>
            <div className={styles.prizeBox}>
            <Image 
            src={Prize}
            className={styles.boximg}
            width={200} 
            height={300} 
            alt="1st Prize"
            />
            <h3 className={styles.prizeName}>PRIZE</h3>
            <p className={styles.prizeInfo}>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
          </div>
          </div>
          <div className={styles.box}>
          <div className={styles.boxcontent}>
            <h2 className={styles.heading}>II Best Hack</h2>
            <div className={styles.prizeBox}>
            <Image 
            src={Prize}
            className={styles.boximg}
            width={200} 
            height={300} 
            alt="2nd Prize"
            />
            <h3 className={styles.prizeName}>PRIZE</h3>
            <p className={styles.prizeInfo}>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
          </div>
          </div>
          <div className={styles.box}>
          <div className={styles.boxcontent}>
            <h2 className={styles.heading}>III Best Hack</h2>
            <div className={styles.prizeBox}>
            <Image 
            src={Prize}
            className={styles.boximg}
            width={200} 
            height={300} 
            alt="3rd Prize"
            />
            <h3 className={styles.prizeName}>PRIZE</h3>
            <p className={styles.prizeInfo}>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
          </div>
          </div>
          </div>

        </div>

        <div className={styles.C}>
          <h1 className={styles.thisH1}>FAQs</h1>
          <Faq/>
        </div>

        <div className={styles.last}></div>
      </div>
      
    </div>
    )
  }


