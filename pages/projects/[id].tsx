import Head from 'next/head'
import {Inter} from '@next/font/google'
import Layout from "../../components/Layout";
import Project from "../../components/Projects/Project";

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
                <Project/>
            </Layout>
        </>
    )
}
