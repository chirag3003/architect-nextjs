import React from 'react';
import AboutUsStyle from "./AboutUs.style";
import LineElement from "../LineElement";


function AboutUs() {
    return (
        <AboutUsStyle className={"w-full flex  flex-col-reverse lg:flex-row"}>
            <div className="lg:w-7/12 pl-10 lg:py-32 xl:py-40 xl:pl-80 pr-24 ">
                <article className={"lg:max-w-xl"}>
                    <LineElement/>
                    <div className="heading my-8">
                        <h2 className={"font-medium"}>About Us</h2>
                    </div>
                    <div className="title">
                        <p className={"font-bold"}>
                            We build our projects with your dreams and ideas.
                        </p>
                    </div>
                    <div className="content my-6">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Urna molestie at elementum eu facilisis sed. Justo nec ultrices
                            dui sapien eget mi proin. Lorem sed risus ultricies tristique nulla aliquet enim tortor at.
                            Viverra suspendisse potenti nullam ac tortor vitae purus. Sollicitudin aliquam ultrices sagittis
                            orci. Viverra justo nec ultrices dui sapien eget. Sed elementum tempus egestas.
                            <br/><br/>
                            Nibh tellus molestie nunc non blandit massa. In tellus integer feugiat scelerisque varius. Risus
                            sed vulputate odio ut enim blandit. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum.
                            Purus in massa tempor nec feugiat nisl pretium fusce. Pellentesque eu tincidunt tortor aliquam
                            nulla. Maecenas ultricies mi eget mauris pharetra et ultrices neque. Vulputate eu scelerisque
                            felis imperdiet proin fermentum leo vel orci. Adipiscing tristique risus nec feugiat in.

                        </p>
                    </div>
                </article>
            </div>
            <div className="image-purple sm:hidden md:block h-80 md:h-96 lg:w-5/12 lg:h-auto ">
                <div className="image h-full"></div>
            </div>
        </AboutUsStyle>
    );
}

export default AboutUs;