import demoProject from "./demo";
import {SVGProps} from "react";

const projects = {
    "demo-project": demoProject
}

export default projects

type projectType = {
    image: string,
    title: string,
    year?:string
    subtitle: string,
    dParas: string[],
    details: {
        title: string,
        value: string
    }[],
    whatDone: {
        desc: string,
        badges: {
            icon: string,
            title: string,
            desc: string
        }[]
    },
    images: {src:string}[]
}
export type {projectType}