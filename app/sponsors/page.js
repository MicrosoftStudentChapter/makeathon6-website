import styles from './sponsors.module.css'
import React from 'react' 
import flag from '/public/sponsors/flag.png'
import associate from '/public/sponsors/newAssociate1.png'
import power from '/public/sponsors/newPower3.png'
import Image from 'next/image'
import bgImage from '/public/sponsors/bgImg.png'
import Logo from '/public/sponsors/mlscLogo.png'
import Flaglogo from '/public/sponsors/flogo.png'
import { myFont } from '@/components/font/myfont'

export default function Page() {
      return (
        <>
          <Image className={styles.bg} src={bgImage} alt='/' />

          {/* <div className={styles.marginBawa}>*/}
          <Image className={styles.Logo} src={Logo} alt='/' /><h1 className={`${styles.heading}  ${myFont.className}`}>OUR SPONSORS</h1>
          {/* </div>*/}
          <div className={myFont.className}>
          <Flag /><Power /><Associate />
          </div>
        </>
      );
    }
 
  function Flag(){
    return (
    <><div className={styles.sideLine}>
    <h1 className={`${styles.text} ${myFont.className}`}>Title Sponsors</h1>
    <div className={styles.flexs}>

    <div className={styles.overlap}>
        <Image className={styles.ameer} src={flag} alt='/' />
        <Image className={styles.flaglogo} src={Flaglogo} alt='/' /></div>
    <div className={styles.overlap}>
        <Image className={styles.ameer} src={flag} alt='/' />
        <Image className={styles.flaglogo} src={Flaglogo} alt='/' />
        </div>
    {/* <div className={styles.overlap}>
        <Image className={styles.ameer} src={flag} alt='/' />
        <Image className={styles.flaglogo} src={Flaglogo} alt='/' /></div>
    <div className={styles.overlap}>
        <Image className={styles.ameer} src={flag} alt='/' />
        <Image className={styles.flaglogo} src={Flaglogo} alt='/' /></div>
    <div className={styles.overlap}>
        <Image className={styles.ameer} src={flag} alt='/' />
        <Image className={styles.flaglogo} src={Flaglogo} alt='/' /></div> */}
    <div className={styles.overlap}>
        <Image className={styles.ameer} src={flag} alt='/' />
        <Image className={styles.flaglogo} src={Flaglogo} alt='/' /></div>
    </div>
    </div> </>
     )
  }

  function Power(){
    return(
      <><div className={styles.sideLine}>
    <h2 className={styles.text}>Power Sponsors</h2>
    <div className={styles.flex}>
    <div className={styles.overlap}>
    <Image className={styles.gareeb} src={power} alt='/' />
    <Image className={styles.flaglogo} src={Flaglogo} alt='/' /></div>
    <div className={styles.overlap}>
    <Image className={styles.gareeb} src={power} alt='/' />
    <Image className={styles.flaglogo} src={Flaglogo} alt='/' /></div>
    <div className={styles.overlap}>
    <Image className={styles.gareeb} src={power} alt='/' />
    <Image className={styles.flaglogo} src={Flaglogo} alt='/' /></div>
    <div className={styles.overlap}>
    <Image className={styles.gareeb} src={power} alt='/' />
    <Image className={styles.flaglogo} src={Flaglogo} alt='/' /></div>
    <div className={styles.overlap}>
    <Image className={styles.gareeb} src={power} alt='/' />
    <Image className={styles.flaglogo} src={Flaglogo} alt='/' /></div>
    <div className={styles.overlap}>
    <Image className={styles.gareeb} src={power} alt='/' />
    <Image className={styles.flaglogo} src={Flaglogo} alt='/' /></div>
    </div></div> </>
    )
  }
 
  function Associate(){
    return(
      <><div className={styles.sideLine}>
      <h2 className={styles.text}>Associate Sponsors</h2>
     <div className={styles.flex}>
     <div className={styles.overlap}>
     <Image className={styles.more} src={associate} alt='/' />
    <Image className={styles.flaglogo} src={Flaglogo} alt='/' /></div>
    <div className={styles.overlap}>
     <Image className={styles.more} src={associate} alt='/' />
    <Image className={styles.flaglogo} src={Flaglogo} alt='/' /></div>
    <div className={styles.overlap}>
     <Image className={styles.more} src={associate} alt='/' />
    <Image className={styles.flaglogo} src={Flaglogo} alt='/' /></div>
    <div className={styles.overlap}>
     <Image className={styles.more} src={associate} alt='/' />
    <Image className={styles.flaglogo} src={Flaglogo} alt='/' /></div>
    <div className={styles.overlap}>
     <Image className={styles.more} src={associate} alt='/' />
    <Image className={styles.flaglogo} src={Flaglogo} alt='/' /></div>
    <div className={styles.overlap}>
     <Image className={styles.more} src={associate} alt='/' />
    <Image className={styles.flaglogo} src={Flaglogo} alt='/' /></div>
    </div></div></>
    )
  }