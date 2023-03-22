import Head from 'next/head'
import Layout from "../components/Layout";
import AboutUs from "../components/AboutUs";
import React from "react";
import {aboutPara} from "../configs/about";

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
                <AboutUs knowMore={false}/>
                <section className={"lg:p-40 xl:p-50 p-10"}>
                    <h2 className={"text-center text-4xl font-semibold"}>Our Story</h2>
                    {aboutPara.map((para, index) => {
                        return (
                            <p key={index}
                               className={"py-4 text-xl text-justify"}>
                                {para}
                            </p>
                        )
                    })}
                </section>
            </Layout>
        </>
    )
}
