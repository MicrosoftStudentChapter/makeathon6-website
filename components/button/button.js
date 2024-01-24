import React from 'react';
import styles from './button.module.css'
function HomeButton(props) {
    return (
        <>
            <div className={styles.homeButton}>
                <div className={styles.top}></div>
                <div className={styles.home}>

                    <h3><span>{props.title}</span></h3>

                    <div className={styles.box}></div>

                </div>

            </div>
        </>
    );
}

export default HomeButton;