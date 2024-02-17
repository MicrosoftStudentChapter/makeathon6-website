import styles from './about.module.css';
import Image from 'next/image';
import MLSC from '/public/About/MLSC-logo.png';
import Faq from './components/Faq';
import Makeathon from '/public/MLSClogo.png';
import first from '/public/About/first.png';
import second from '/public/About/second.png';
import third from '/public/About/third.png';
import { myFont } from '@/components/font/myfont';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.mainbox}>
        <div className={styles.makeathon}>
          <Image src={Makeathon} alt='#' className={styles.makeLogo} />
          <p className={styles.abText}>MLSC is poised to showcase its prowess through its upcoming mega flagship event, Makethon6, slated for the end of February. This eagerly anticipated event promises to be a showcase of ingenuity, where students will come together to ideate, innovate, and create solutions to real-world problems, cementing MLSC&apos;s reputation as a hub for budding technocrats and visionaries.</p>
        </div>
        <div className={styles.mlsc}>
          <p className={styles.abText}>The Microsoft Learning Student Chapter (MLSC) at Thapar Institute of Engineering and Technology, Patiala, stands as a beacon of technical excellence.
            With a dedicated team of mentors and enthusiasts, MLSC fosters an environment of collaboration and learning, where students can engage in projects, competitions, and networking events. As a vibrant society, it fosters an environment where students can delve into the realm of technology with zeal and innovation.
          </p>
          <Image src={MLSC} className={styles.logo} alt="MLSC" />
        </div>
      </div>

      <h1 className={`${styles.thisH1} ${myFont.className}`}>Prizes</h1>
      <div className={styles.cards}>
        <PrizeCard title="Best Hack" image={first} />
        <PrizeCard title="2nd Best Hack" image={second} />
        <PrizeCard title="3rd Best Hack" image={third} />
      </div>

      <div className={styles.C}  >
        <h1 className={`${styles.thisH1} ${myFont.className} `}>FAQ<span className={styles.s}>s</span></h1>
        <div style={{ padding: '10px' }}>

          <Faq />
        </div>
      </div>
    </div>
  );
}

function PrizeCard({ title, image }) {
  return (
    <div className={styles.card}>
      <span className={styles.close} />
      <span className={styles.arrow} />
      <article>
        <h2>{title}</h2>
        <div className={styles.pic}>
          <Image className={styles.img} src={image} alt='/' />
        </div>
        <div className={styles.desc}>
          <span className={styles.bold}>Revealing Soon!</span>
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
  );
}
