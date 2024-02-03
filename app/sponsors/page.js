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
import { Footer } from '../../components/footer/Footer'
import Dev from '/public/sponsors/Devfolio_Logo-Colored.png'
import Poly from '/public/sponsors/Polygon_Logo-Colored.png'
import Eth from '/public/sponsors/ethindia-dark.png'
import Hamburger from '@/components/Hamburger/Hamburger'

export default function Page() {
      return (
        <>
        <Hamburger/>
        <div>
          <Image className={styles.bg} src={bgImage} alt='/' />
          <Image className={styles.Logo} src={Logo} alt='/' /><h1 className={`${styles.heading}  ${myFont.className}`}>OUR SPONSORS</h1>
          <div className={myFont.className}>
          <Flag /><Power />
          {/* <Associate /> */}
          </div>
        </div>
        <Footer />
        </>
      );
    }

  function Flag(){
    return (
    <><div className={styles.sideLine}>
    <h1 className={`${styles.text} ${myFont.className}`}>Title Sponsors</h1>
    <div className={styles.flexs}>
    <FlagComponent />
    </div></div> </>
     )
  }

  function Power(){
    return(
      <><div className={styles.sideLine}>
    <h2 className={`${styles.text} ${myFont.className}`}>Power Sponsors</h2>
    <div className={styles.flex}>
    <PowerComponent />
    </div></div> </>
    )
  }
 
  function Associate(){

    return(
      <><div className={styles.sideLine}>
      <h2 className={styles.text}>Associate Sponsors</h2>
     <div className={styles.flex}>
      <AssociateComponent />
    </div></div></>
    )
  }

  function FlagComponent(){
    const ameer=[Dev,Poly]
    return(<>
      {
        ameer.map((amer)=><div className={styles.overlap}>
        <Image className={styles.ameer} src={flag} alt='/' />
        <Image className={styles.flaglogo} src={amer} alt='/' /></div>)
      }</>
    )
  }

  function PowerComponent(){
    const gareeb=[Eth]
    return(<>
      {
       gareeb.map((gareb)=>    <div className={styles.overlap}>
       <Image className={styles.gareeb} src={power} alt='/' />
       <Image className={styles.flaglogo} src={gareb} alt='/' /></div>)
      }</> 
    )
  }

  function AssociateComponent(){
    const more = [Dev];
    return(<>
      {
      more.map((mor)=><div className={styles.overlap}>
      <Image className={styles.more} src={associate} alt='/' />
      <Image className={styles.flaglogo2} src={mor} alt='/' /></div>)
      }</> 
    )
  }