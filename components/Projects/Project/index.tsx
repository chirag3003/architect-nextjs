import React from 'react';
import Title1 from "../../TItle1";
import ProjectDetail from "./ProjectDetail";
import Images from "./Images";
import * as icons from "@heroicons/react/24/outline";
import {projectType} from "configs/projects";

type props = {
    project:projectType;
}

function Project(props:props) {
    return (
        <>
            <div className={"image-purple w-full max-h-screen"}>
                <img src={props.project.image} className="image lg w-full max-h-screen object-cover"
                     alt={""}/>
                <article
                    className="content absolute top-0 left-0 w-full h-full hidden lg:flex flex-col justify-center items-center text-white">
                    <Title1 title={props.project.title} heading={props.project.subtitle}/>
                    {props.project.dParas.map((text, index) => {
                        return <p key={index} className={"max-w-3xl font-medium my-2 text-lg"}>
                            {text}
                        </p>
                    })}
                </article>

            </div>
            <section className="content w-full p-10 px-5 md:px-20 lg:hidden">
                <article
                    className="content flex lg:hidden flex-col justify-center items-center text-black">
                    <Title1 title={props.project.title} heading={props.project.subtitle}/>
                    {props.project.dParas.map((text, index) => {
                        return <p key={index} className={"max-w-3xl font-medium my-2 text-lg"}>
                            {text}
                        </p>
                    })}
                </article>
            </section>
            <section
                className="detail-list flex flex-col md:flex-row gap-8 flex-wrap justify-center items-center p-10 lg:px-20">
                {props.project.details.map((d, i) => {
                    return (
                        <ProjectDetail key={i} title={d.title} value={d.value}/>
                    )
                })}
            </section>
            <section className={"flex flex-col p-10 justify-center items-center p-10 lg:px-20"}>
                <Title1 title={"What have we done in the Project?"} heading={"Our Process"}/>
                <p className={"py-4 max-w-3xl text-xl text-center"}>
                    {props.project.whatDone.desc}
                </p>
                <div className="flex flex-col md:flex-row my-10 justify-center items-center gap-8">

                    {props.project.whatDone.badges.map((item,index) => {
                        // @ts-ignore
                        const Icon = icons[item.icon]
                        return (
                            <div key={index} className="flex flex-col justify-center items-center">
                                <div className="icon text-yellow-600">
                                    <Icon width={50}/>
                                </div>
                                <h3 className="text-3xl my-2 font-semibold">{item.title}</h3>
                                <p className={"max-w-sm text-center"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    {item.desc}</p>
                            </div>
                        )
                    })}


                </div>
            </section>
            <section id="images" className={" p-10 lg:px-20"}>
                <Images images={props.project.images}/>
            </section>
        </>
    );
}

export default Project;