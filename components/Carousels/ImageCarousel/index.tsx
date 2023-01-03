import React from 'react';
import Carousels from "../index";

type ImageCarouselProps = {
    images: ImageCarouselImage[]
}

type ImageCarouselImage = {
    src: string;
    text?: string;
}

function ImageCarousel(props: ImageCarouselProps) {
    return (
        <div className={"w-full h-screen"}>
            <Carousels carouselChildren={
                props.images.map((image, index) => {
                    return (
                        <div className={"w-full h-full relative"} key={index}>
                            <img className={"h-full w-full"} src={image.src} alt=""/>
                            {image.text && <h2 className="text w-1/2 text-white text-5xl absolute bottom-10 right-5 text-right">
                                {image.text}
                            </h2>}
                        </div>
                    )
                })
            }/>
        </div>
    );
}

export default ImageCarousel;