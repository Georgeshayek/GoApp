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
    
    useEffect(()=>{
      if(isMaxLg)
      setActiveIndex(prev=>prev-1); console.log("1")},[isMaxLg]);
    useEffect(()=>{
      if(isMaxLg2)
      setActiveIndex(prev=>prev+1); console.log("1")},[isMaxLg2]);
      useEffect(()=>setActiveIndex(1),[])

  return (
    <div className="container mx-auto">
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={isMaxLg?1:3}
      navigation
      
      onSwiper={(swiper) => console.log(swiper.activeIndex)}
      onSlideChange={(swiper) =>isMaxLg?setActiveIndex(swiper.activeIndex):setActiveIndex(swiper.activeIndex+1)}
    >
        
        {props.data.map((mov,index)=>{  
    return   ( <SwiperSlide activeIndex ><AboutItem title={mov.title} description={mov.description} image={mov.image} active={index === activeIndex}/></SwiperSlide>)
        })}
      
    
    </Swiper>
    </div>
  );
};
export default  AboutSwiper