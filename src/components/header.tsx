import React from "react";
import styles from "@/styles/Header.module.scss"

interface Props {
    isMobile: boolean
}

export const HeaderComponent = (props: Props) => {
    return (
    <div className={styles.headerBody}>
        <div className={styles.flexContainer}>
            <div className={styles.logoContainer}>
                <div className={styles.top}>TedTech</div>
                <div className={styles.bottom}>Web Solutions LLC</div>
            </div>
            <div className={styles.pageLinks}>
                <div className={styles.button}>Home</div>
                <div className={styles.button}>About</div>
                <div className={styles.button}>Services</div>
                {/* <div>Portfolio</div> */}
                <div className={styles.button}>Contact</div>
            </div>
            <div className={styles.menuIcon}>
                <img src="iconMenu.svg" alt="" />
            </div>
        </div>
    </div>
    );
};