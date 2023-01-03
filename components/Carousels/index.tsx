import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type props = {
    slidesPerView?: number;
    carouselChildren: JSX.Element[],
    className?: string;
}

function Index({slidesPerView = 1, carouselChildren, ...Props}: props) {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={slidesPerView}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={true}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            pagination={{clickable: true}}
            className={`h-full w-full ${Props.className}`}
        >
            {carouselChildren?.map((child, index) => {
                return (
                    <SwiperSlide key={index}>
                        {child}
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
}

export default Index;