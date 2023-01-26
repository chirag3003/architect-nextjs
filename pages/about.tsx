import Head from 'next/head'
import Layout from "../components/Layout";
import AboutUs from "../components/AboutUs";

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
                <AboutUs />

            </Layout>
        </>
    )
}
