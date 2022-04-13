import React from 'react';
import { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SlideContent from "./SlideContent/SlideContent";
import { slides } from './SlideContent/slidesConstants';
import "./sliderCustomStyles.scss";
import styles from './SliderSide.module.scss';
 
const SliderSide: React.FC = () => {
  return (
    <div className={styles.wrapper}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          className='h-full'
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay
          pagination={{ clickable: true }}
          >
            {
              slides &&
              slides.map(item => (
                <SwiperSlide key={item.title}>
                  <SlideContent {...item} />
                </SwiperSlide>
              ))
            }
        </Swiper>
      </div>
  )
}

export default SliderSide