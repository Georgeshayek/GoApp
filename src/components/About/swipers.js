// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import AboutItem from './aboutItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {  useState } from 'react';
const AboutSwiper=(props) => {
    const [activeIndex, setActiveIndex] = useState(0);

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
      onSlideChange={(swiper) =>setActiveIndex(swiper.realIndex)}
    >
        
        {props.data.map((mov,index)=>{  
    return   ( <SwiperSlide key={index}> <AboutItem id={mov.id} title={mov.title} description={mov.description} image={mov.image} active={index === activeIndex}/></SwiperSlide>)
        })}
      
    
    </Swiper>
    </div>
  );
};
export default  AboutSwiper