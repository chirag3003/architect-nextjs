import demoProject from "./demo";
import {SVGProps} from "react";

const projects = {
    "demo-project": demoProject
}
export const projectImages = [
    "/projects/p1.jpg",
    "/projects/p2.JPG",
    "/projects/p3.JPG",
    "/projects/p4.JPG",
    "/projects/p5.JPG",
    "/projects/p6.JPG",
    "/projects/p7.jpg",
    "/projects/p8.jpg",

]
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