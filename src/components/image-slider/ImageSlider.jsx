import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "./ImageSlider.sass"

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Import Swiper styles
import 'swiper/css';


function ImageSlider({ data }) {
        const imageSlider = data.map((obj) => {
            return (
                <SwiperSlide tag="picture" key={obj}><img className="image" src={obj} /></SwiperSlide>
            )
        })

        if (imageSlider.length) {
            return (
                <div className="imageSliderContainer">
                    <div role="button-prev" className="button-slider-prev">
                        <div className="iconContainer"><ArrowBackIcon /></div >
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        loop
                        pagination
                        navigation={{
                            prevEl: ".button-slider-prev",
                            nextEl: ".button-slider-next"
                        }}
                        tag="section"
                        spaceBetween={0}
                        slidesPerView={1}
                    >
                        {imageSlider}
                    </Swiper>
                    <div role="button-next" className="button-slider-next">
                        <div className="iconContainer"><ArrowForwardIcon /></div>
                    </div>
                </div>
            )
        }

       
}

export default ImageSlider