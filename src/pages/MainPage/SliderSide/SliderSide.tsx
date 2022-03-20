import React from 'react';
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SlideContent from "./components/SlideContent";
import { slides } from './slidesConstants';
import "./sliderCustomStyles.scss";
 
const SliderSide: React.FC = () => {
  return (
    <div className="basis-1/2 overflow-hidden hidden lg:block">
        <Swiper
          modules={[Navigation, Pagination]}
          className='h-full'
          spaceBetween={50}
          slidesPerView={1}
          navigation
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