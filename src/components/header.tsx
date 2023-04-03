import React from "react";
import styles from "@/styles/Header.module.scss"

interface props {
    
}

export const HeaderComponent = () => {

    return (
    <div className={styles.headerBody}>
        <div className={styles.flexContainer}>
            <div className={styles.logoContainer}>
                <div>TedTech</div>
                <div>Web Solutions LLC</div>
            </div>
            <div className={styles.pageLinks}>
                <div className={styles.button}>Home</div>
                <div className={styles.button}>About</div>
                <div className={styles.button}>Services</div>
                {/* <div>Portfolio</div> */}
                <div className={styles.button}>Contact</div>
            </div>
        </div>
    </div>
    );
};