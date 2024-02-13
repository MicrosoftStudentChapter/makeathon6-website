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
      <h1 className={`${styles.thisH1} ${myFont.className}`}>FAQ<span className={styles.s}>s</span></h1>
      <Faq/>
    </div>
</div >
    {/* <Footer/> */ }