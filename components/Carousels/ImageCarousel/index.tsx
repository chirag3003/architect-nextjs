import React from 'react';
import Carousels from "../index";
import ImageCarouselStyle from "./ImageCarousel.style";
import LineElement from "../../LineElement";

type ImageCarouselProps = {
    images: ImageCarouselImage[]
}

type ImageCarouselImage = {
    src: string;
    text?: string;
}

function ImageCarousel(props: ImageCarouselProps) {
    return (
        <ImageCarouselStyle className={"w-full h-full"}>
            <Carousels carouselChildren={
                props.images.map((image, index) => {
                    return (
                        <div className={"w-full h-full relative image-purple "} key={index}>
                            <div style={{
                                backgroundImage:`url("${image.src}")`
                            }} className="image w-full h-full" >
                            </div>
                            <div className="content text-white absolute top-0 left-0 h-full w-full flex justify-center items-center flex-col    ">
                                <LineElement/>
                                <div className="heading">
                                    <h2 className={"font-semibold mt-4 mb-8"}>workplace</h2>
                                </div>
                                <div className="title max-w-2xl font-bold text-5xl text-center mb-16">
                                    <h1>Luxury Villas and Vacation Homes of Gloria Life Center</h1>
                                </div>
                                <button className={"py-2 px-8 font-semibold font-2xl border-2 border-white rounded-l-full rounded-r-full"}>View Project</button>
                            </div>
                        </div>
                    )
                })
            }/>
        </ImageCarouselStyle>
    );
}

export default ImageCarousel;