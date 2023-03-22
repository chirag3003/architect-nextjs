import React from 'react';
import AboutUsStyle from "./AboutUs.style";
import LineElement from "../LineElement";
import Link from "next/link";
import {aboutIntro} from "../../configs/about";


function AboutUs({knowMore=true}) {
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
                            {aboutIntro}
                        </p>
                        {knowMore && <Link href={"/about"} passHref={true}>
                            <p className="know-more mt-6 font-medium text-yellow-600  text-2xl">Know More &#8594;</p>
                        </Link>}
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