import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import { HeaderComponent } from '@/components/header'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect (() => {
    getScreenWidth();
  }, [])

  const getScreenWidth = () => {
    window.addEventListener('resize', getScreenWidth);
    if (typeof window === 'undefined') {
      return;
    }
    const {innerWidth, innerHeight} = window;
    if (innerWidth <= 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  return (
    <>
      <Head>
        <title>Websites By Trent LLC</title>
        <meta name="description" content="Website Development Service" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.introContainer}>
          <div className={styles.desktopHeader}>
            <HeaderComponent isMobile={isMobile}></HeaderComponent>
          </div>
          <div className={styles.introBody}>
            <div className={styles.colLeft}>
              <div className={styles.header}>Web Design + Development</div>
              <div className={styles.body}>No page builders or WordPress - We offer 100% hand-coded websites with superior results starting at $150/mo.</div>
              <div className={styles.button}>GET A WEBSITE!</div>
            </div>
            <div className={styles.colRight}>
              <img src="platform.svg" alt="" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
