import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar, A11y,Autoplay} from 'swiper';
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CarouselStyle from "./CarouselStyle";

type props = {
    slidesPerView?: number;
    carouselChildren: JSX.Element[],
    className?: string;
    autoplay?:{
        delay:number
    }|boolean
}

function Carousels({slidesPerView = 1, carouselChildren, ...Props}: props) {
    return (
        <CarouselStyle>
            <Swiper
                spaceBetween={0}
                slidesPerView={slidesPerView}
                navigation={true}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                pagination={{clickable: true}}
                loop={true}
                autoplay={Props.autoplay?Props.autoplay:{}}
                className={`h-full w-full ${Props.className ? Props.className : ""}`}
            >
                {carouselChildren?.map((child, index) => {
                    return (
                        <SwiperSlide key={index}>
                            {child}
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </CarouselStyle>

    );
}

export default Carousels;