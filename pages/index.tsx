import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Carousels from "../components/Carousels";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Architect</title>
        <meta name="description" content="Created by Chirag Bhalotia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="slide w-80 h-80">
            {/* eslint-disable-next-line react/jsx-key */}
            <Carousels slidesPerView={1} carouselChildren={[<div>hello</div>,<div>world</div>,<div>hello</div>]}/>
        </div>
      </main>
    </>
  )
}
