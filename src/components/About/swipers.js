// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';
import AboutItem from './aboutItem';

const AboutSwiper=(props) => {
    const [activeIndex, setActiveIndex] = useState(1);
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      
      onSwiper={(swiper) => console.log(swiper.activeIndex)}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex+1)}
    >
        
        {props.data.map((mov,index)=>{  
    return   ( <SwiperSlide activeIndex ><AboutItem title={mov.title} description={mov.description} image={mov.image} active={index === activeIndex}/></SwiperSlide>)
        })}
      
    
    </Swiper>
  );
};
export default  AboutSwiper