import Head from 'next/head'
import {Inter} from '@next/font/google'
import Layout from "../../components/Layout";
import Project from "../../components/Projects/Project";
import { GetStaticPaths, GetStaticProps } from 'next'
import projects,{projectType} from "configs/projects"
export default function Home(props:projectType) {
    return (
        <>
            <Head>
                <title>Architect</title>
                <meta name="description" content="Created by Chirag Bhalotia"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Layout>
                <Project project={props}/>
            </Layout>
        </>
    )
}

export const getStaticPaths:GetStaticPaths = async () => {
    return {
        paths: Object.keys(projects).map((project) => {
            return {params:{id:project}}
        }),
        fallback: false, // can also be true or 'blocking'
    }
}

export const getStaticProps:GetStaticProps = (context) =>  {
    // console.log(projects["demo-project"])
    const id = context?.params?.id as string
    return {
        // @ts-ignore
        props:projects[id] , // will be passed to the page component as props
    }
}
