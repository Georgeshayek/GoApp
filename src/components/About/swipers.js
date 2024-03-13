// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import AboutItem from './aboutItem';
import { useMediaQuery } from "react-responsive";

const AboutSwiper=(props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const isMaxLg = useMediaQuery({ maxWidth: 1023 });
    const isMaxLg2 = useMediaQuery({ minWidth: 1023 });
    
   

  return (
    <div className="container mx-auto">
    <Swiper
    breakpoints={{
      1023:{slidesPerView:3},
      768:{slidesPerView:1}
      
    }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      initialSlide={1}
      centeredSlides
      navigation
      
      onSwiper={(swiper) => console.log(swiper.realIndex)}
      onSlideChange={(swiper) =>setActiveIndex(swiper.realIndex)}
    >
        
        {props.data.map((mov,index)=>{  
    return   ( <SwiperSlide activeIndex ><AboutItem id={mov.id} title={mov.title} description={mov.description} image={mov.image} active={index === activeIndex}/></SwiperSlide>)
        })}
      
    
    </Swiper>
    </div>
  );
};
export default  AboutSwiper