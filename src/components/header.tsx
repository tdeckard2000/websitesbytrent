import React from "react";
import styles from "@/styles/Header.module.scss"

export const HeaderComponent = () => {

    return (
    <div className={styles.headerBody}>
        <div className={styles.flexContainer}>
            <div className={styles.logoContainer}>LOGO</div>
            <div className={styles.pageLinks}>
                <div>Home</div>
                <div>About</div>
                <div>Services</div>
                {/* <div>Portfolio</div> */}
                <div>Contact</div>
            </div>
        </div>
    </div>
    );
};