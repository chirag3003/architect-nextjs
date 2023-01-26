import React from 'react';
import Title1 from "../../TItle1";
import ProjectDetail from "./ProjectDetail";
import Images from "./Images";
import {HomeModernIcon} from "@heroicons/react/24/outline";

function Project() {
    return (
        <>
            <div className={"image-purple w-full max-h-screen"}>
                <img src={"/images/project1/image1.jpg"} className="image lg w-full max-h-screen object-cover"
                     alt={""}/>
                <article
                    className="content absolute top-0 left-0 w-full h-full hidden lg:flex flex-col justify-center items-center text-white">
                    <Title1 title={"Luxury Villas and Vacation Homes of Gloria Life Center"} heading={"workplace"}/>
                    <p className={"max-w-3xl font-medium my-2 text-lg"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Urna molestie at elementum eu facilisis sed. Justo nec ultrices
                        dui sapien eget mi proin. Lorem sed risus ultricies tristique nulla aliquet enim tortor at.
                        Viverra suspendisse potenti nullam ac tortor vitae purus. Sollicitudin aliquam ultrices sagittis
                        orci. Viverra justo nec ultrices dui sapien eget. Sed elementum tempus egestas.</p>
                    <p
                        className={"max-w-3xl font-medium my-2 text-lg"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Urna molestie at elementum eu facilisis sed. Justo nec ultrices
                        dui sapien eget mi proin. Lorem sed risus ultricies tristique nulla aliquet enim tortor at.
                        Viverra suspendisse potenti nullam ac tortor vitae purus. Sollicitudin aliquam ultrices sagittis
                        orci. Viverra justo nec ultrices dui sapien eget. Sed elementum tempus egestas.</p>
                </article>

            </div>
            <section className="content w-full p-10 px-5 md:px-20 lg:hidden">
                <article
                    className="content flex lg:hidden flex-col justify-center items-center text-black">
                    <Title1 title={"Luxury Villas and Vacation Homes of Gloria Life Center"} heading={"workplace"}/>
                    <p className={"max-w-3xl font-medium my-2 text-lg"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Urna molestie at elementum eu facilisis sed. Justo nec ultrices
                        dui sapien eget mi proin. Lorem sed risus ultricies tristique nulla aliquet enim tortor at.
                        Viverra suspendisse potenti nullam ac tortor vitae purus. Sollicitudin aliquam ultrices sagittis
                        orci. Viverra justo nec ultrices dui sapien eget. Sed elementum tempus egestas.</p>
                    <p
                        className={"max-w-3xl font-medium my-2 text-lg"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Urna molestie at elementum eu facilisis sed. Justo nec ultrices
                        dui sapien eget mi proin. Lorem sed risus ultricies tristique nulla aliquet enim tortor at.
                        Viverra suspendisse potenti nullam ac tortor vitae purus. Sollicitudin aliquam ultrices sagittis
                        orci. Viverra justo nec ultrices dui sapien eget. Sed elementum tempus egestas.</p>
                </article>
            </section>
            <section
                className="detail-list flex flex-col md:flex-row gap-8 flex-wrap justify-center items-center p-10 lg:px-20">
                <ProjectDetail title={"Location"} value={"Kolkata, India"}/>
                <ProjectDetail title={"Location"} value={"Kolkata, India"}/>
                <ProjectDetail title={"Location"} value={"Kolkata, India"}/>
                <ProjectDetail title={"Location"} value={"Kolkata, India"}/>
            </section>
            <section className={"flex flex-col p-10 justify-center items-center p-10 lg:px-20"}>
                <Title1 title={"What have we done in the Project?"} heading={"Our Process"}/>
                <p className={"py-4 max-w-3xl text-xl text-center"}>
                    Nibh praesent tristique magna sit amet purus gravida quis blandit. Eget sit amet tellus cras
                    adipiscing enim eu. Sit amet nisl purus in mollis nunc. Praesent semper feugiat nibh sed pulvinar
                    proin gravida. Ut etiam sit amet nisl purus in mollis nunc sed. Vulputate enim nulla aliquet
                    porttitor lacus luctus accumsan tortor. Enim sit amet venenatis urna. Mauris nunc congue nisi vitae
                    suscipit tellus mauris a. Quis blandit turpis cursus in hac habitasse platea dictumst quisque.
                </p>
                <div className="flex flex-col md:flex-row my-10 justify-center items-center gap-8">
                    <div className="flex flex-col justify-center items-center">
                        <div className="icon text-yellow-600">
                            <HomeModernIcon width={50}/>
                        </div>
                        <h3 className="text-3xl my-2 font-semibold">Planning</h3>
                        <p className={"max-w-sm text-center"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="icon text-yellow-600">
                            <HomeModernIcon width={50}/>
                        </div>
                        <h3 className="text-3xl my-2 font-semibold">Planning</h3>
                        <p className={"max-w-sm text-center"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="icon text-yellow-600">
                            <HomeModernIcon width={50}/>
                        </div>
                        <h3 className="text-3xl my-2 font-semibold">Planning</h3>
                        <p className={"max-w-sm text-center"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                </div>
            </section>
            <section id="images" className={" p-10 lg:px-20"}>
                <Images/>
            </section>
        </>
    );
}

export default Project;