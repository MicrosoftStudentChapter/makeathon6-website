import styles from './tracks.module.css'

export default function Page() {
    return <>
    <body className={styles.main}>
       
    <div className={styles.container}>
      <div className={styles.cont}>
       
       <div className={styles.common}>
        <h1 className={styles.Subtitle}>Event 1</h1>
        <p className={styles.para}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed architecto natus tempora, ex pariatur accusantium rem, ullam delectus cumque, cupiditate id temporibus! Perspiciatis nisi, aut voluptates quidem non nostrum aperiam!</p>
        <button className={styles.click}>Click Me!</button>
       </div>
        
       <div className={styles.common} >
        <h1 className={styles.Subtitle}>Event 2</h1>
        <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, quos nisi ad autem enim nam doloribus necessitatibus tempora iste perferendis vero deleniti voluptatem quam, eos ex, minima atque consectetur blanditiis!</p>
        <button className={styles.click}>Click Me!</button>
       </div>
        
       <div className={styles.common}>
        <h1 className={styles.Subtitle}>Event 3</h1>
        <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero deserunt, doloremque tenetur cupiditate exercitationem temporibus tempore eligendi maiores, provident ut quos, facere velit ratione necessitatibus voluptas ullam inventore dolores sit.</p>
        <button className={styles.click}>Click Me!</button>
       </div>
      </div>  
    </div>
    
    </body>
    </>
  }
