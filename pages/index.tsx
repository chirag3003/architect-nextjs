import Head from "next/head";
import ImageCarousel from "../components/Carousels/ImageCarousel";
import Layout from "../components/Layout";
import { imageCarousel } from "../configs/carousels";
import AboutUs from "../components/AboutUs";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Clients from "components/Clients";

export default function Home() {
  return (
    <>
      <Head>
        <title>Creative Interior</title>
        <meta name="description" content="Created by Chirag Bhalotia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section id={"landing-carousel"} className="images w-screen h-[50vh] lg:h-screen">
          <ImageCarousel images={imageCarousel} />
        </section>
        <AboutUs />
        {/*<Projects/>*/}
        {/* <Testimonials/> */}
        <Clients />
      </Layout>
    </>
  );
}
