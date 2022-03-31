import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css/bundle";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";

export default function Activity() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="mySwiper-image">Slide 1</SwiperSlide>
        <SwiperSlide className="mySwiper-image">Slide 2</SwiperSlide>
        <SwiperSlide className="mySwiper-image">Slide 3</SwiperSlide>
        
      </Swiper>
    </>
  );
}
