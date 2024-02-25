"use client"
import styles from './about.module.css';
import React, { useState } from "react";
import Image from 'next/image';
import MLSC from '/public/About/MLSC-logo.png';
import Faq from './components/Faq';
import Makeathon from '/public/MLSClogo.png';
import first from '/public/About/first.png';
import second from '/public/About/second.png';
import third from '/public/About/third.png';
import { myFont } from '@/components/font/myfont';
import { ChuLo } from '@/components/team/team';

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
        <PrizeCard title="Best Hack" image={first} prize={"20,000 Cash Component"} moreprizes={[
          "3-5 Smartwatches - Adcom (6000 x 5 = 30,000)",
          "5 Reskill x Axure T-shirts",
          "Free Data Science courses by Skillarena (worth Rs. 3499 each)",
          "6 months web or bot hosting:!",
          "5 Hidden Hour E Voucher (Worth 1000 x 5=5000) + 5 Hidden Hour E Voucher (Worth 150 x 5=750)",
          "Zsecurity courses( worth $99 for each course)",
          "Fueler Premium(worth $100)",
          ".xyz free domains",
          "Coding Interview Prep Courses (worth $50 each): Interview Cake",
          "E-Books from Rosenfeld Media",
          "Free courses from Coding Minutes",
          "Async Driven intervew by Interview Buddy worth Rs. 1100",
          "Beeceptor 1year team plan worth $240",
          "Internship Opportunity from LetsGrowMore",
          "Family Scavanger Hunt Six Pack (woth $140 value)",
          "Wolfram Award worth $375",
          "1 year long subscription of NordVPN, NordPass and Incogni"
        ]}/>
        <PrizeCard title="2nd Best Hack" image={second} prize={"15,000 cash component"} moreprizes={[
          "15,000",
          "3-5 Mobile Camera lens - Adcom (2000 x 5 = 10,000)",
          "5 Reskill x Axure T-shirts",
          "Free Data Science courses by Skillarena (worth Rs. 3499 each)",
          "4 months web or bot hosting:Cybrancee",
          "5 Hidden Hour E Voucher (Worth 1000 x 5=5000)",
          "Fueler Premium(worth $100)",
          ".xyz free domains",
          "Coding Interview Prep Courses (worth $50 each): Interview Cake",
          "E-Books from Rosenfeld Media",
          "Free courses from Coding Minutes",
          "Async Driven intervew by Interview Buddy worth Rs. 1100",
          "Beeceptor 1year team plan worth $240",
          "Internship Opportunity from LetsGrowMore",
          "Wolfram Award worth $375",
          "1 year long subscription of NordVPN, NordPass and Incogni"
        ]} />
        <PrizeCard title="3rd Best Hack" image={third} prize={"10,000 cash component"} moreprizes={[
          "10,000",
          "5 Reskill x Axure T-shirts",
          "Free Data Science courses by Skillarena (worth Rs. 3499 each)",
          "3 months web or bot hosting:Cybrancee",
          "5 Hidden Hour E Voucher (Worth 150 x 5 = 750)",
          "Coding Interview Prep Courses (worth $50 each): Interview Cake",
          "Free courses from Coding Minutes",
          "Internship Opportunity from LetsGrowMore",
        ]} />
        <PrizeCard title="Best First Year Hack" image={third} prize={"5,000 cash component"} moreprizes={[
          "5,000",
          "5 Reskill x Axure T-shirts",
          "5 Hidden Hour E Voucher (Worth 150 x 5 = 750)",
        ]} />
        <PrizeCard title="Most Innovative Hack" image={third} prize={"5,000 cash component"} moreprizes={[
          "5,000",
          "5 Reskill x Axure T-shirts",
          "5 Hidden Hour E Voucher (Worth 150 x 5 = 750)",
        ]} />
        <PrizeCard title="Mystery" image={third} prize={""} moreprizes={[
          
          "5 Reskill x Axure T-shirts",
          "5 Hidden Hour E Voucher (Worth 150 x 5 = 750)",
        ]}/>
      </div>

      <div className={styles.C}  >
        <h1 className={`${styles.thisH1} ${myFont.className} `}>FAQ<span className={styles.s}>s</span></h1>
        <div style={{ padding: '10px' }}>

          <Faq />
          <ChuLo/>
        </div>
      </div>
    </div>
  );
}

function PrizeCard({ title, image, prize, moreprizes }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling on the body
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = ''; // Allow scrolling on the body
  };

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
          <span className={styles.bold}>{prize}</span>
        </div>
      </article>
      <div className={styles.actions}>
        <div className={styles.btn} onClick={openModal}>
          <span>Know More</span>
          <img
            className={styles.icon}
            src="https://res.cloudinary.com/dcvqnyvvt/image/upload/v1677090548/right-arrow_ucify9.png"
          />
        </div>
      </div>
      {modalOpen && (
        <div className={styles.backdrop} onClick={closeModal}>
          <div className={styles.overlay}>
            <div className={styles.modal}>
              <span className={styles.closeModal} onClick={closeModal}>
                &times;
              </span>
              <h2>Prizes</h2>
              <ul>
                {moreprizes.map((prize, index) => (
                  <li key={index}>{prize}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );

}
