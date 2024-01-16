import React from 'react';
import styles from './button.module.css'
function HomeButton(props) {
    return ( 
        <>
        <div>
        <div className = {styles.top}></div>
        <div className = {styles.home}>
             
            <h3><span>{props.title}</span></h3>
            <div className={styles.box}></div>
            <h4 className={styles.description}><span>{props.description}</span> <img src='https://freesvg.org/img/ninja-blade.png'></img></h4>
        </div>
        </div>
        </>
     );
}

export default HomeButton;