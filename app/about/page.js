import styles from './about.module.css'
import Image from 'next/image'
import { Footer } from '../../components/footer/Footer'
import MLSC from '/public/About/MLSC-logo.png'
// import Prize from './assets/prize.jpeg'
import Faq from './components/Faq'
import Makeathon from '/public/MLSClogo.png'
import first from '/public/About/first.png'
import second from '/public/About/second.png'
import third from '/public/About/third.png'
import { myFont } from '@/components/font/myfont'
import Hamburger from '@/components/Hamburger/Hamburger'

export default function Page() {
    return (
      <>
    <div>
      <Hamburger/>
      {/* <div className={styles.menu}>
        <button className={styles.navButton}>Nav</button>
        <div className={styles.menuContent}>
          <a className={styles.title} href="#">Link 1</a>
          <a className={styles.title} href="#">Link 2</a>
          <a className={styles.title} href="#">Link 3</a>
        </div>
      </div> */}
      <div className={styles.container}>
          <h1 className={`${styles.thisH1} ${myFont.className}`}>About Us</h1>
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

        {/* <div className={styles.B}>
          <div className={styles.prizes}>
          <Image className={styles.second} src={second} alt='/' />
          <Image className={styles.first} src={first} alt='/' />
          <Image className={styles.third} src={third} alt='/' />
          </div>
        </div> */}
        <h1 className={`${styles.thisH1} ${myFont.className}`}>Prizes</h1>
        <div className={styles.cards}>
          <div className={styles.card}>
            <span className={styles.close} />
            <span className={styles.arrow} />
            <article>
              <h2>Best Hack</h2>
              <div className={styles.pic}>
            <Image className={styles.img} src={first} alt='/' />
                {/* <img src="https://res.cloudinary.com/dcvqnyvvt/image/upload/v1677078787/1_yocxfh.png" /> */}
              </div>
              <div className={styles.desc}>
              <span className={styles.bold}>
                {/* ₹ 20,000/- Cash */}
                Revealing Soon!
                </span>
                {/* <br />
                Official MLSC Merch
                <br />
                Devkits from Ikarus3D
                <br />
                CodeChef Pro Subscription
                <br />
                and more! */}
              </div>
            </article>
            <div className={styles.actions}>
              <a className={styles.btn} href="#" target="blank">
                <span>Know More</span>
                <img
                  className={styles.icon}
                  src="https://res.cloudinary.com/dcvqnyvvt/image/upload/v1677090548/right-arrow_ucify9.png"
                />
              </a>
            </div>
          </div>
          <div className={styles.card}>
            <span className={styles.close} />
            <span className={styles.arrow} />
            <article>
              <h2>2nd Best Hack</h2>
              <div className={styles.pic}>
              <Image className={styles.img} src={second} alt='/' />
                {/* <img src="https://res.cloudinary.com/dcvqnyvvt/image/upload/v1677078788/3_mwkuoq.png" /> */}
              </div>
              <div className={styles.desc}>
              <span className={styles.bold}> 
              {/* ₹ 15,000/- Cash */}
              Revealing Soon!
              </span>
                {/* <br />
                Official MLSC Merch
                <br />
                Devkits from Ikarus3D
                <br />
                CodeChef Pro Subscription
                <br />
                and more! */}
              </div>
            </article>
            <div className={styles.actions}>
              <a className={styles.btn}href="#" target="blank">
                <span>Know More</span>
                <img
                  className={styles.icon}
                  src="https://res.cloudinary.com/dcvqnyvvt/image/upload/v1677090548/right-arrow_ucify9.png"
                />
              </a>
            </div>
          </div>
          <div className={styles.card}>
            <span className={styles.close} />
            <span className={styles.arrow} />
            <article>
              <h2>3rd Best Hack</h2>
              
              <div className={styles.pic}>
            <Image className={styles.img} src={third} alt='/' />
                {/* <img src="https://res.cloudinary.com/dcvqnyvvt/image/upload/v1677078788/2_f0hzt6.png" /> */}
              </div>
              <div className={styles.desc}>
                <span className={styles.bold}>
                  {/* ₹ 10,000/- Cash */}
                  Revealing Soon!
                  </span>
                {/* <br />
                Official MLSC Merch
                <br />
                Devkits from Ikarus3D
                <br />
                CodeChef Pro Subscription
                <br />
                and more! */}
              </div>
            </article>
            <div className={styles.actions}>
              <a className={styles.btn} href="#" target="blank">
                <span>Know More</span>
                <img
                  className={styles.icon}
                  src="https://res.cloudinary.com/dcvqnyvvt/image/upload/v1677090548/right-arrow_ucify9.png"
                />
              </a>
            </div>
          </div>  
        </div>
        <div className={styles.C}>
          <h1 className={`${styles.thisH1} ${myFont.className}`}>FAQs</h1>
          <Faq/>
        </div>
    </div>
      
    </div>
    <div>
      <Footer />
    </div>
    </>
    )
  }


