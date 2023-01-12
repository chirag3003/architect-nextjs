import React from 'react';
import TestimonialStyle from "./Testimonial.style";
import TestimonialCarousel from "../Carousels/TestimonialCarousel";
import testimonials from "configs/testimonials";

function Testimonials() {
    return (
        <TestimonialStyle className={"p-10 bg-yellow-100  bg-opacity-10"}>
            <article itemProp={"Our Testimonials"} className={"w-full max-w-xl"}>
                <TestimonialCarousel testimonials={testimonials}/>
            </article>
        </TestimonialStyle>
    );
}

export default Testimonials;