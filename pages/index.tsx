import Head from 'next/head'
import Image from 'next/image'
import {Inter} from '@next/font/google'
import styles from '../styles/Home.module.css'
import Carousels from "../components/Carousels";
import ImageCarousel from "../components/Carousels/ImageCarousel";
import Layout from "../components/Layout";
import {imageCarousel} from "../configs/carousels";
import AboutUs from "../components/AboutUs";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <Head>
                <title>Architect</title>
                <meta name="description" content="Created by Chirag Bhalotia"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Layout>
                <section id={"landing-carousel"} className="images w-screen h-screen">
                    <ImageCarousel images={imageCarousel}/>
                </section>
                <AboutUs/>
                <Projects/>
                <Testimonials/>
            </Layout>
        </>
    )
}
