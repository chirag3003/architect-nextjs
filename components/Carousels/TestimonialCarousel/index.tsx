import React from 'react';
import Carousels from "../index";

type testimonial = {
    img: string;
    name: string;
    title: string;
    description: string
}
type props = {
    testimonials: testimonial[]
}

function TestimonialCarousel({testimonials}: props) {
    return (
        <div>
            <Carousels carouselChildren={testimonials.map((test, index) => {
                return (
                    <div key={index} className="testimonial flex flex-col items-center justify-center py-10 mx-auto w-full h-full">
                        <img src={test.img} alt=""
                             className={"w-20 aspect-square rounded-lg"}/>
                        <p itemProp={"client name"} className={"text-lg text-yellow-600 font-semibold mt-4 m-0"}>{test.name}</p>
                        <p itemProp={"client title"} className={"text-sm mb-4"}>{test.title}</p>

                        <p className={"text-center"}>
                            {test.description}
                        </p>
                    </div>
                )
            })}></Carousels>
        </div>
    );
}

export default TestimonialCarousel;