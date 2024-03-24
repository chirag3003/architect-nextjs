import React from "react";
import Carousels from "../index";
import ImageCarouselStyle from "./ImageCarousel.style";
import LineElement from "../../LineElement";
import Title1 from "../../TItle1";

type ImageCarouselProps = {
  images: ImageCarouselImage[];
};

type ImageCarouselImage = {
  src: string;
  text?: string;
  contain?: boolean;
};

function ImageCarousel(props: ImageCarouselProps) {
  return (
    <ImageCarouselStyle className={"w-full h-full"}>
      <Carousels
        carouselChildren={props.images.map((image, index) => {
          return (
            <div className={"w-full h-full relative bg-gray-200"} key={index}>
              {!image.contain && (
                <div
                  style={{
                    backgroundImage: `url("${image.src}")`,
                    backgroundSize: !image.contain ? "cover" : "contain",
                  }}
                  className="image w-full h-full"
                ></div>
              )}
              {image.contain && (
                <div className="pt-60">
                  <img
                    src={image.src}
                    alt={image.text}
                    className="w-80 mx-auto mb-10 h-auto object-contain"
                  />
                  <p className="mx-auto text-3xl text-center font-bold">{image.text}</p>
                </div>
              )}
              {/* <div className="content text-white absolute top-0 left-0 h-full w-full flex justify-center items-center flex-col    ">
                                <Title1 title={"Luxury Villas and Vacation Homes of Gloria Life Center"} heading={"workplace"}/>
                                <button className={"py-2 px-8 font-semibold font-2xl border-2 border-white rounded-l-full rounded-r-full"}>View Project</button>
                            </div> */}
            </div>
          );
        })}
        autoplay={{ delay: 5000 }}
      />
    </ImageCarouselStyle>
  );
}

export default ImageCarousel;
