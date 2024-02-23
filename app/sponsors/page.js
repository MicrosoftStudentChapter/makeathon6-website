import styles from './sponsors.module.css'
import React from 'react' 
// import flag from '/sponsors/flag.png'
import associate from '/public/sponsors/newAssociate1.png'
import power from '/public/sponsors/newPower3.png'
import Image from 'next/image'
import bgImage from '/public/sponsors/bgImg.png'
import Logo from '/public/sponsors/mlscLogo.png'
import Flaglogo from '/public/sponsors/flogo.png'
import { myFont, myFontBold } from '@/components/font/myfont'
// import { Footer } from '../../components/footer/Footer'
import Dev from '/public/sponsors/Devfolio_Logo-Colored.png'
import Poly from '/public/sponsors/Polygon_Logo-Colored.png'
import Eth from '/public/sponsors/ethindia-dark.png'
import SponsorList from './data.jsx'
import Link from 'next/link'
// import title from '/public/sponsors/title'
// import Hamburger from '@/components/Hamburger/Hamburger'
const flag = '/sponsors/flag.png';

const sponsors1 = [
  { name: 'Devfolio', designation: 'title', website: 'https://devfolio.co/', src: '/sponsors/images/title/Devfolio.png' },
  { name: 'Polygon', designation: 'title', website: 'https://polygon.technology/', src: '/sponsors/images/title/Polygon.png' },
  { name: 'ETH India', designation: 'title', website: 'https://ethindia.co/', src: '/sponsors/images/title/ETH.png' },
  { name: 'Adcom', designation: 'title', website: 'https://www.adcomhitech.com/', src: '/sponsors/images/title/Adcom.png' },
  { name: 'Physics Wallah', designation: 'title', website: 'https://www.pw.live/', src: '/sponsors/images/title/Physics Wallah.png' },
  { name: 'Tim Hortons', designation: 'title', website: 'https://timhortonsindia.com/', src: '/sponsors/images/title/Tim Hortons.png' },
]
  
   const sponsors2=[ { name: 'Tic Tacs', designation: 'Associate', website: '', src: '/sponsors/images/Associate/Tic Tacs.png' },
    { name: 'Coding Ninjas', designation: 'Associate', website: 'https://www.codingninjas.com/', src: '/sponsors/images/Associate/CN.png' },
    { name: 'Interview Buddy', designation: 'Associate', website: 'https://interviewbuddy.net/', src: '/sponsors/images/Associate/Interview Buddy.png' },
    { name: '.xyz', designation: 'Associate', website: 'https://gen.xyz/',
     src: '/sponsors/images/Associate/XYZ.png' },
    // { name: 'LetsGrowMore', designation: 'Associate', website: 'https://letsgrowmore.in/', src: '/sponsors/images/Associate/LetsGrowMore.png' },
    { name: 'Fueler', designation: 'Associate', website: 'https://fueler.io/', src: '/sponsors/images/Associate/Fueler.png' },
    { name: 'Zsecurity', designation: 'Associate', website: 'https://zsecurity.org/', src: '/sponsors/images/Associate/zee.png' },
    { name: 'Interview Cake', designation: 'Associate', website: 'https://www.interviewcake.com/', src: '/sponsors/images/Associate/Interview Cake.png' },
    { name: 'Rosenfeld Media', designation: 'Associate', website: 'https://rosenfeldmedia.com/', src: '/sponsors/images/Associate/Rosenfeld Media.png' },
    { name: 'Beeceptor', designation: 'Associate', website: 'https://beeceptor.com/', src: '/sponsors/images/Associate/Beeceptor.png' },
    { name: 'Axure', designation: 'Associate', website: 'https://www.axure.com/', src: '/sponsors/images/Associate/Axure.png' },
    { name: 'Echo 3D', designation: 'Associate', website: 'https://www.echo3d.com/', src: '/sponsors/images/Associate/Echo 3D.png' },
    { name: 'Let\'s Roam', designation: 'Associate', website: 'https://www.letsroam.com/', src: '/sponsors/images/Associate/Let\'s_Roam.png' },
    { name: 'Adventures from Scratch', designation: 'Associate', website: 'https://www.adventurebook.com/', src: '/sponsors/images/Associate/Adventures from Scratch.png' },
    { name: 'Cybrancee', designation: 'Associate', website: 'https://cybrancee.com/', src: '/sponsors/images/Associate/Cybranceee.PNG' },
    { name: 'StockEdge', designation: 'Associate', website: 'https://stockedge.com/', src: '/sponsors/images/Associate/SE.png' },
    // { name: 'StreamYard', designation: 'Associate', website: 'https://streamyard.com/', src: '/sponsors/images/Associate/StreamYard.png' },
    // { name: 'Escape Room Games iHidden Hour', designation: 'Associate', website: 'https://www.thehiddenhour.com/', src: '/sponsors/images/Associate/Escape Room Games iHidden Hour.png' },
    // { name: 'Brooklyn', designation: 'Associate', website: 'https://brooklyncentral.in/', src: '/sponsors/images/Associate/Brooklyn.png' },
    { name: 'Wolfram', designation: 'Associate', website: 'https://www.wolframalpha.com/', src: '/sponsors/images/Associate/Wolfram.png' },
    { name: 'VerbWire', designation: 'Associate', website: 'https://www.verbwire.com/', src: '/sponsors/images/Associate/VerbWiree.png' },
    { name: 'Nord VPN', designation: 'Associate', website: 'https://nordvpn.com/', src: '/sponsors/images/Associate/Nord VPN.png' },
    { name: 'Languify', designation: 'Associate', website: 'https://www.languify.in/', src: '/sponsors/images/Associate/Languifyy.png' },
    { name: 'Sybgen', designation: 'Associate', website: 'https://sybgen.com/', src: '/sponsors/images/Associate/Sybgen.jpg' },
    { name: 'Bellrocc', designation: 'Associate', website: 'https://www.thebellrocc.com', src: '/sponsors/images/Associate/Bellrocc.png' },
    // { name: 'Ecco', designation: 'Associate', website: 'https://www.languify.in/', src: '/sponsors/images/Associate/Ecco.png' },
    // { name: 'BoxCricket', designation: 'Associate', website: '', src: '/sponsors/images/Associate/BoxCricket.png' },
    // { name: 'Cava', designation: 'Associate', website: '', src: '/sponsors/images/Associate/Cava.pdf' },
    { name: 'BoomBird', designation: 'Associate', website: 'https://boombirds.com/', src: '/sponsors/images/Associate/BoomBir.png' },
    // { name: 'Sudan\'s Tech', designation: 'Associate', website: 'https://www.sudanstech.com/', src: '/sponsors/images/Associate/Sudan\'s Tech.png' },
    // { name: 'Moledao', designation: 'Associate', website: 'https://moledao.io/#/home', src: '/sponsors/images/Associate/Moledao.png' },
    // { name: 'Hirelnn', designation: 'Associate', website: 'https://hireinn.com/', src: '/sponsors/images/Associate/Hirelnn.png' },
    // { name: 'Navan.ai', designation: 'Associate', website: 'https://navan.ai/', src: '/sponsors/images/Associate/Navan.ai.png' },
    // { name: 'NoticeBard', designation: 'Associate', website: 'https://noticebard.com/', src: '/sponsors/images/Associate/NoticeBard.png' },
    // { name: 'Drunken Roads', designation: 'Associate', website: 'https://drunkenroads.exlyapp.com/', src: '/sponsors/images/Associate/Drunken Roads.png' }
   ]


  const sponsors3=[{ name: 'Coding minutes', designation: 'power', website: 'https://www.codingminutes.com/', src: '/sponsors/images/associate/CM.png' },
  { name: 'Reskilll', designation: 'power', website: 'https://reskilll.com/', src: '/sponsors/images/power/Reskillll.png' },
  { name: 'SpaceX gym', designation: 'power', website: '', src: '/sponsors/images/power/SpaceX__gym.png' },
  { name: 'BharatBox', designation: 'power', website: 'https://bharatbox.sandbox.game/', src: '/sponsors/images/power/BharatBox.svg' },
  { name: 'Internshala', designation: 'power', website: 'https://internshala.com/', src: '/sponsors/images/power/Internshalaa.png' },
  { name: 'Refections Cafe', designation: 'power', website: '', src: '/sponsors/images/power/Refections Cafe.png' },
  // { name: 'The Product House', designation: 'power', website: 'https://www.theproduct.house/', src: '/sponsors/images/power/The Product House/The Product House.png' },
  ]



  const sponsors4=[{ name: 'Moledao', designation: 'Community', website: '/', src: '/sponsors/images/Community/Moleda.png' },
  { name: 'Navan.ai', designation: 'Community', website: '/', src: '/sponsors/images/Community/Navan.ai.png' },
  // { name: 'Sudans\'sTech', designation: 'Community', website: '/', src: '/sponsors/images/Community/Sudans\'sTech.PNG' }
];

const sponsors5 = [
  { name: 'AbhiBus', designation: 'title', website: '/', src: '/sponsors/images/Other/AbhiBuss.png' },
  { name: 'Drunken Roads', designation: 'title', website: '/', src: '/sponsors/images/Other/Drunken_Roadss.png' },
  { name: 'GiveMyCertificate', designation: 'title', website: '/', src: '/sponsors/images/Other/GiveMyCertificate.png' },
  { name: 'SkillArena', designation: 'title', website: '/', src: '/sponsors/images/Other/SkillArena.png' }];

export default function Page() {
  return (
    <>
    {/* <Hamburger/> */}
    <div>
      <Image className={styles.bg} src={bgImage} alt='/' />

      {/* <div className={styles.marginBawa}>*/}
      <Image className={styles.Logo} src={Logo} alt='/' /><h1 className={`${styles.heading}  ${myFont.className}`}>OUR SPONSORS</h1>
      {/* </div>*/}
      <div className={myFont.className}>
      <Flag />
      <Power />
      <Associate />
      <Community/>
      <Others />
      </div>
    </div>
    {/* <Footer/> */}
   
    </>
    
  );
}

    function Flag(){
      return (
      <>
        <div className={styles.sideLine}>
          <h1 className={styles.text}>Title Sponsors</h1>
          <div className={styles.flexs}>
            <FlagComponent />
          </div>
        </div> 
      </>
     )
  }
  function Power(){
    return(
      <>
        <div className={styles.sideLine}>
          <h2 className={styles.text}>Power Sponsors</h2>
          <div className={styles.flex}>
            <PowerComponent />
          </div>
        </div> 
      </>
    )
  }
  function Associate(){

    return(
      <>
        <div className={styles.sideLine}>
          <h2 className={styles.text}>Associate Sponsors</h2>
          <div className={styles.flex}>
            <AssociateComponent />
          </div>
        </div>
      </>
    )
  }

  function Community(){

    return(
      <>
        <div className={styles.sideLine}>
          <h2 className={styles.text}>Community Sponsors</h2>
          <div className={styles.flex}>
            <CommunityComponent />
          </div>
        </div>
      </>
    )
  }
  
  function Others(){

    return(
      <>
        <div className={styles.sideLine}>
          <h2 className={styles.text}>Other Sponsors</h2>
          <div className={styles.flex}>
            <OtherComponent />
          </div>
        </div>
      </>
    )
  }
  

function FlagComponent(){
  const ameer = [Dev, Poly];
  
  return (
    <>
      {sponsors1.map((amer, index) => (
        <Link href="/" passHref key={index} target='_blank'> 
          <div className={styles.overlap}>
            <img className={styles.ameer} src={flag} alt='/' />
            <img className={styles.flaglogo} src={amer['src']} alt='/' />
          </div>
         </Link>
      ))}
    </>
  );
}



function PowerComponent(){
  const gareeb=[Eth];
  
  return (
    <>
      {sponsors3.map((gareb, index) => (
        <Link href="/" key={index} passHref target='_blank'>
          <div className={styles.overlap}>
            <img className={styles.gareeb} src={flag} alt='/' />
            <img className={styles.flaglogo} src={gareb['src']} alt='/' />
          </div>
         </Link>
      ))}
    </>
  );
}



function OtherComponent(){
  const gareeb=[Eth];
  
  return (
    <>
      {sponsors5.map((gareb, index) => (
        <Link href="/" key={index} passHref target='_blank'>
          <div className={styles.overlap}>
            <img className={styles.gareeb} src={flag} alt='/' />
            <img className={styles.flaglogo} src={gareb['src']} alt='/' />
          </div>
         </Link>
      ))}
    </>
  );
}


function AssociateComponent(){
  const gareeb=[Eth];
  
  return (
    <>
      {sponsors2.map((gareb, index) => (
        <Link href="/" key={index} passHref target='_blank'>
          <div className={styles.overlap}>
            <img className={styles.gareeb} src={flag} alt='/' />
            <img className={styles.flaglogo} src={gareb['src']} alt='/' />
          </div>
         </Link>
      ))}
    </>
  );
}


function CommunityComponent(){
  const gareeb=[Eth];
  
  return (
    <>
      {sponsors4.map((gareb, index) => (
        <Link href="/" key={index} passHref target='_blank'>
          <div className={styles.overlap}>
            <img className={styles.gareeb} src={flag} alt='/' />
            <img className={styles.flaglogo} src={gareb['src']} alt='/' />
          </div>
         </Link>
      ))}
    </>
  );
}
// function AssociateComponent(){
//   const more = [Dev];
  
//   return (
//     <>
//       {more.map((mor, index) => (
//         <Link href="https://drive.google.com/drive/folders/1ZXWzav6kcxkeaCtEssWDC4ZWB0nNWldN" key={index} passHref target='_blank'>
//           <div className={styles.overlap}>
//             <Image className={styles.more} src={associate} alt='/' />
//             <Image className={styles.flaglogo2} src={mor} alt='/' />
//           </div>
//         </Link>
//       ))}
//     </>
//   );
// }