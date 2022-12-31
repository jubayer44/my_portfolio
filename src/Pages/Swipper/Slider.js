// import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Slider = ({ielts1, ielts2, ielts3}) => {
    return (
        <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={ielts1} alt="" /> </SwiperSlide>
        <SwiperSlide><img src={ielts2} alt="" /> </SwiperSlide>
        <SwiperSlide><img src={ielts3} alt="" /> </SwiperSlide>
      </Swiper>
    </>
    );
};

export default Slider;