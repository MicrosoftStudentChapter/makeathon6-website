import styles from './footer.module.css';
import King from './assets/newsec.png';
import Fin from './assets/newsec.png';
import Mail from './assets/mail.png';
import Location from './assets/locate.png';
import LD from './assets/linkedin.png'
import Yt from './assets/yt.png'
import Ig from './assets/insta.png'
import Fb from './assets/fb.png'
import Logo from './assets/Logo.png'
import Sr from './assets/spons.png'

import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <>
    <div className={styles.foot}>
    <div className={styles.line}>
`     `
    </div>
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.left}>

            <div className={styles.div}>
                <div
                  className={styles.div2}
                >
                  <Image className={styles.sheild} src={Logo}/>
                  <div
                    className={styles.div3}
                  >
                    <h2 className={styles.legacy}>Legacy of</h2>
                    <h2 className={styles.innovations}>INNOVATIONS</h2>
                  </div>
                </div>
                <div className={styles.socials}>
                <a href='https://www.linkedin.com/company/microsoft-learn-student-chapter'>
                <Image className={styles.imager} src={LD}/> 
                </a>
                <a href='https://www.youtube.com/c/microsoftlearnstudentchaptertietpatiala'>
                <Image className={styles.imager} src={Yt}/> 
                </a>
                <a href='https://www.facebook.com/mlsctiet'>
                <Image className={styles.imager} src={Fb}/> 
                </a>
                <a href='https://www.instagram.com/mlsc_tiet/'>
                <Image className={styles.imager} src={Ig}/> 
                </a>
                </div>
            </div>
        </div>

        <div className={styles.right}>

          <h2 className={styles.contact}>CONTACT US</h2>
          <div className={styles.boxer}>
            <div className={styles.rightL}>

              <a href='mailto: msc@thapar.edu' target='_blank' style={{ textDecoration: 'none'}}>
                <div className={styles.bleh}>
                  <Image className={styles.image2} src={Mail}/> <div className={styles.side}>msc@thapar.edu</div>
                </div>
              </a>

              <a href='https://goo.gl/maps/bMSfh8uoYCVuLEjD6' target='_blank' style={{ textDecoration: 'none'}}> 
                <div className={styles.bleh}>
                  <Image className={styles.image} src={Location}/> <div className={styles.side}>TIET Patiala</div>
                </div>
              </a>

              <Link href="/Proposal.pdf" passHref style={{ textDecoration: 'none'}}>
                <div className={styles.bleh}>
                    <Image className={styles.image} src={Sr} /> <div className={styles.side}>Sponsor Us!</div>
                </div>
              </Link>

            </div>

            <div className={styles.rightR}>
            
            <a href='https://www.linkedin.com/in/tanmay-mann-9990ba255/' target='_blank' style={{ textDecoration: 'none'}}>
              <div className={styles.bleh}>
                <Image className={styles.image3} src={King}/> <div className={styles.side}>Tanmay Mann</div><br></br>
              </div>
              <span className={styles.gen}>(General Secretary)</span>
            </a>

            <a href='https://www.linkedin.com/in/agrimgoyal/' target='_blank' style={{ textDecoration: 'none'}}>
              <div className={styles.bleh}>
                <Image className={styles.image3} src={Fin}/> <div className={styles.side}>Agrim Goyal</div><br></br>
              </div>
              <span className={styles.gen}>(Finance Secretary)</span>
            </a>
            </div>

          </div>
        </div>
        
      </div>
    </div>
    </div>
    </>
  )
};
