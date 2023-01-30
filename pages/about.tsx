import Head from 'next/head'
import Layout from "../components/Layout";
import AboutUs from "../components/AboutUs";
import React from "react";

export default function About() {
    return (
        <>
            <Head>
                <title>Architect</title>
                <meta name="description" content="Created by Chirag Bhalotia"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Layout>
                <section
                    style={{
                        backgroundImage: `url("${"/images/about/about2.jpg"}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundAttachment: "fixed"
                    }}
                    id="header"
                    className={"h-[40vh] lg:h-[50vh] flex justify-center items-center"}
                >
                    <h1 className={"text-center text-6xl text-white font-bold"}>About Us</h1>
                </section>
                <AboutUs />
                <section className={"lg:p-40 xl:p-50 p-10"}>
                    <h2 className={"text-center text-4xl font-semibold"}>Our Story</h2>
                    <p
                        className={"py-4 text-xl text-justify"}>
                        Nibh praesent tristique magna sit amet purus gravida quis blandit. Eget sit amet tellus cras
                        adipiscing enim eu. Sit amet nisl purus in mollis nunc. Praesent semper feugiat nibh sed
                        pulvinar
                        proin gravida. Ut etiam sit amet nisl purus in mollis nunc sed. Vulputate enim nulla aliquet
                        porttitor lacus luctus accumsan tortor. Enim sit amet venenatis urna. Mauris nunc congue nisi
                        vitae
                        suscipit tellus mauris a. Quis blandit turpis cursus in hac habitasse platea dictumst quisque.
                    </p>
                    <p className={"py-4 text-xl text-justify"}>
                        Nibh praesent tristique magna sit amet purus gravida quis blandit. Eget sit amet tellus cras
                        adipiscing enim eu. Sit amet nisl purus in mollis nunc. Praesent semper feugiat nibh sed
                        pulvinar
                        proin gravida. Ut etiam sit amet nisl purus in mollis nunc sed. Vulputate enim nulla aliquet
                        porttitor lacus luctus accumsan tortor. Enim sit amet venenatis urna. Mauris nunc congue nisi
                        vitae
                        suscipit tellus mauris a. Quis blandit turpis cursus in hac habitasse platea dictumst quisque.
                    </p>
                    <p className={"py-4 text-xl text-justify"}>
                        Nibh praesent tristique magna sit amet purus gravida quis blandit. Eget sit amet tellus cras
                        adipiscing enim eu. Sit amet nisl purus in mollis nunc. Praesent semper feugiat nibh sed
                        pulvinar
                        proin gravida. Ut etiam sit amet nisl purus in mollis nunc sed. Vulputate enim nulla aliquet
                        porttitor lacus luctus accumsan tortor. Enim sit amet venenatis urna. Mauris nunc congue nisi
                        vitae
                        suscipit tellus mauris a. Quis blandit turpis cursus in hac habitasse platea dictumst quisque.
                    </p>
                    <p className={"py-4 text-xl text-justify"}>
                        Nibh praesent tristique magna sit amet purus gravida quis blandit. Eget sit amet tellus cras
                        adipiscing enim eu. Sit amet nisl purus in mollis nunc. Praesent semper feugiat nibh sed
                        pulvinar
                        proin gravida. Ut etiam sit amet nisl purus in mollis nunc sed. Vulputate enim nulla aliquet
                        porttitor lacus luctus accumsan tortor. Enim sit amet venenatis urna. Mauris nunc congue nisi
                        vitae
                        suscipit tellus mauris a. Quis blandit turpis cursus in hac habitasse platea dictumst quisque.
                    </p>
                </section>
            </Layout>
        </>
    )
}
