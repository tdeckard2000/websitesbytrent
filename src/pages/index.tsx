import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { HeaderComponent } from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Websites By Trent LLC</title>
        <meta name="description" content="Website Development Service" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.homeIntroContainer}>
          <HeaderComponent></HeaderComponent>
          <div>Web Design + Development</div>
        </div>
      </main>
    </>
  )
}
