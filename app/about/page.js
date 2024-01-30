import styles from './about.module.css'
import Image from 'next/image'
import MLSC from './assets/MLSC-logo.png'
import Prize from './assets/prize.jpeg'
import Faq from './components/Faq'
import Makeathon from '/public/MLSClogo.png'

export default function Page() {
    return (
    <div>

      {/* <div className={styles.menu}>
        <button className={styles.navButton}>Nav</button>
        <div className={styles.menuContent}>
          <a className={styles.title} href="#">Link 1</a>
          <a className={styles.title} href="#">Link 2</a>
          <a className={styles.title} href="#">Link 3</a>
        </div>
      </div> */}
      <div className={styles.container}>
          <h1 className={styles.thisH1}>About Us</h1>
          <div className={styles.mainbox}>
            <div className={styles.makeathon}>
              <Image src={Makeathon} alt='#' className={styles.makeLogo}/>
              <p className={styles.abText}>MLSC is poised to showcase its prowess through its upcoming mega flagship event, Makethon6, slated for the end of February. This eagerly anticipated event promises to be a showcase of ingenuity, where students will come together to ideate, innovate, and create solutions to real-world problems, cementing MLSC&apos;s reputation as a hub for budding technocrats and visionaries.</p>
            </div>
            <div className={styles.mlsc}><p className={styles.abText}>The Microsoft Learning Student Chapter (MLSC) at Thapar Institute of Engineering and Technology, Patiala, stands as a beacon of technical excellence. 
With a dedicated team of mentors and enthusiasts, MLSC fosters an environment of collaboration and learning, where students can engage in projects, competitions, and networking events.As a vibrant society, it fosters an environment where students can delve into the realm of technology with zeal and innovation.
</p>
              <Image src={MLSC} className={styles.logo} alt="MLSC"/>
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


