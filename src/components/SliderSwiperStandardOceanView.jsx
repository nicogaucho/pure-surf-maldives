"use client";

import { useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import roomURL from "../../public/fotostanze/StandardOceanView/1.jpg";
import room1URL from "../../public/fotostanze/StandardOceanView/2.jpg";
import room2URL from "../../public/fotostanze/StandardOceanView/3.jpg";


export default function SliderSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image src={roomURL} className="img-fluid"  alt="room image"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={room1URL} className="img-fluid" alt="room image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={room2URL} className="img-fluid" alt="room image" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-3"
      >
        <SwiperSlide>
          <Image src={roomURL} className="img-fluid"  alt="room image"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={room1URL} className="img-fluid" alt="room image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={room2URL} className="img-fluid" alt="room image" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
