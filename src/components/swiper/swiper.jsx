import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from "swiper";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import './style.css'

const swiper = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="swiper-block">
            <div className="swiper-image-block"></div>
            <div className="border-line"></div>
            <p className='swiper-text'>Codify Academy</p>
            <p className="swiper-description"></p>
            <div className="swiper-contacts">
              <span className="swiper-contact"></span>
              <span className="swiper-contact"></span>
              <span className="swiper-contact"></span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-block">
            <div className="swiper-image-block second-block"></div>
            <div className="border-line"></div>
            <p className='swiper-text'></p>
            <p className="swiper-description"></p>
            <div className="swiper-contacts">
              <span className="swiper-contact"></span>
              <span className="swiper-contact"></span>
              <span className="swiper-contact"></span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-block">
            <div className="swiper-image-block third-block"></div>
            <div className="border-line"></div>
            <p className='swiper-text'></p>
            <p className="swiper-description"></p>
            <div className="swiper-contacts">
              <span className="swiper-contact"></span>
              <span className="swiper-contact"></span>
              <span className="swiper-contact"></span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-block">
            <div className="swiper-image-block fourth-block"></div>
            <div className="border-line"></div>
            <p className='swiper-text'></p>
            <p className="swiper-description"></p>
            <div className="swiper-contacts">
              <span className="swiper-contact"></span>
              <span className="swiper-contact"></span>
              <span className="swiper-contact"></span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-block">
            <div className="swiper-image-block"></div>
            <div className="border-line"></div>
            <p className='swiper-text'></p>
            <p className="swiper-description"></p>
            <div className="swiper-contacts">
              <span className="swiper-contact"></span>
              <span className="swiper-contact"></span>
              <span className="swiper-contact"></span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-block">
            <div className="swiper-image-block"></div>
            <div className="border-line"></div>
            <p className='swiper-text'></p>
            <p className="swiper-description"></p>
            <div className="swiper-contacts">
              <span className="swiper-contact"></span>
              <span className="swiper-contact"></span>
              <span className="swiper-contact"></span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-block">
            <div className="swiper-image-block"></div>
            <div className="border-line"></div>
            <p className='swiper-text'></p>
            <p className="swiper-description"></p>
            <div className="swiper-contacts">
              <span className="swiper-contact"></span>
              <span className="swiper-contact"></span>
              <span className="swiper-contact"></span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default swiper;