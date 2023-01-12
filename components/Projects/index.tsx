import React from 'react';
import ProjectsStyle from "./Projects.style";
import LineElement from "../LineElement";

function Projects() {
    return (
        <ProjectsStyle className={"py-40 xl:px-80 lg:px-52  px-5 flex flex-col items-center"}>
            <LineElement/>
            <div className="heading mt-8 mb-5 text-center">
                <h2>Our Latest Projects</h2>
            </div>
            <div className="title font-bold max-w-2xl text-center">
                <p className={""}>Touch modern concepts and designs with Firm Architecture.</p>
            </div>
            <div className="projects flex flex-col w-full mt-20 md:mt-40">
                <div className="project flex flex-col md:flex-row w-full">
                    <div className="md:w-1/2 image aspect-square">
                        <img src="/images/home2.jpg" alt="" className="w-full h-full object-cover"/>
                    </div>
                    <div className="md:w-1/2 content flex flex-col items-center justify-center px-2 py-6">
                        <LineElement/>
                        <span className={"my-2 lg:my-4 text-yellow-600 font-semibold"}>2018</span>
                        <h2 className={"text-yellow-600 text-3xl font-semibold"}>England Grand Mall</h2>
                        <p className={"text-center my-3 max-w-md"}>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation
                            ullamco.</p>
                        <p className="text-yellow-600 my-2 font-bold">
                            Hotel
                        </p>
                    </div>
                </div>
                <div className="project flex flex-col md:flex-row-reverse w-full">
                    <div className="md:w-1/2 image aspect-square">
                        <img src="/images/home2.jpg" alt="" className="w-full h-full object-cover"/>
                    </div>
                    <div className="md:w-1/2 content flex flex-col items-center justify-center px-2 py-6">
                        <LineElement/>
                        <span className={"my-4 text-yellow-600 font-semibold"}>2018</span>
                        <h2 className={"text-yellow-600 text-3xl font-semibold"}>England Grand Mall</h2>
                        <p className={"text-center my-3 max-w-md"}>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation
                            ullamco.</p>
                        <p className="text-yellow-600 my-2 font-bold">
                            Hotel
                        </p>
                    </div>
                </div>
            </div>
        </ProjectsStyle>
    );
}

export default Projects;