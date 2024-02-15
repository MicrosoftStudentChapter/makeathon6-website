import React from "react";
import Styles from './offlineregbtn.module.css'
export default function OfflineBtn(){
    return(
        <>
        <div className={Styles.offbtn}>
            <button className={Styles.btn}>Apply with Google Form</button>
        </div>
        </>
    )
}