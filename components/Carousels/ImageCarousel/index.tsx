import React from 'react';
import Carousels from "../index";
import ImageCarouselStyle from "./ImageCarousel.style";

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
                        <div className={"w-full h-full relative"} key={index}>
                            <div className="image w-full h-full">
                                <img className={"h-full w-full object-cover"} src={image.src} alt=""/>
                            </div>
                            {image.text &&
                                <h2 className="text w-1/2 text-white text-5xl absolute bottom-10 right-5 text-right">
                                    {image.text}
                                </h2>}
                        </div>
                    )
                })
            }/>
        </ImageCarouselStyle>
    );
}

export default ImageCarousel;