"use client"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState,useRef } from "react";
import { useMediaQuery } from "react-responsive";
import SwiperButtonNext from "./swipperButtonNext";
import { data } from "autoprefixer";

const SwiperDetail = () => {
	const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    const handleNextButtonClick = () => {
        const swiper = swiperRef.current.swiper;
        swiper.slideNext();
		console.log(activeIndex)
    };
    const handlePrevButtonClick = () => {
        const swiper = swiperRef.current.swiper;
        swiper.slidePrev();
    };
	const dataArr = [
		{
			para: "Lorem ipsum dolosssr sit amet, consectetur adipiscing elit. Mauris rutrum lorem non metus finibus volutpat. Sed egestas nibh ac dui accumsan scelerisque. Curabitur vulputate convallis nibh, quis condimentum orci consectetur quis. Nunc lacinia suscipit nulla, sit amet volutpat nibh vestibulum rutrum. Nunc nec congue tortor, at interdum metus. Pellentesque aliquet, elit quis ullamcorper interdum, metus mauris hendrerit massa, id accumsan nisi tellus at nun",
		},
		{
			para: "Lorem ipsum doloer sit amet, consectetur adipiscing elit. Mauris rutrum lorem non metus finibus volutpat. Sed egestas nibh ac dui accumsan scelerisque. Curabitur vulputate convallis nibh, quis condimentum orci consectetur quis. Nunc lacinia suscipit nulla, sit amet volutpat nibh vestibulum rutrum. Nunc nec congue tortor, at interdum metus. Pellentesque aliquet, elit quis ullamcorper interdum, metus mauris hendrerit massa, id accumsan nisi tellus at nun",
		},
		{
			para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum lorem non metus finibus volutpat. Sed egestas nibh ac dui accumsan scelerisque. Curabitur vulputate convallis nibh, quis condimentum orci consectetur quis. Nunc lacinia suscipit nulla, sit amet volutpat nibh vestibulum rutrum. Nunc nec congue tortor, at interdum metus. Pellentesque aliquet, elit quis ullamcorper interdum, metus mauris hendrerit massa, id accumsan nisi tellus at nun",
		},
		{
			para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum lorem non metus finibus volutpat. Sed egestas nibh ac dui accumsan scelerisque. Curabitur vulputate convallis nibh, quis condimentum orci consectetur quis. Nunc lacinia suscipit nulla, sit amet volutpat nibh vestibulum rutrum. Nunc nec congue tortor, at interdum metus. Pellentesque aliquet, elit quis ullamcorper interdum, metus mauris hendrerit massa, id accumsan nisi tellus at nun",
		},
	];
	const length=dataArr.length-1;
	return (
		<div className="container mx-auto py-4">
            <div className="grid lg:grid-cols-2  max-lg:grid-rows-3 max-lg:px-2 lg:px-48 gap-2 ">
                <div className=" lg:col-span-1 lg:col-start-1 max-lg:row-start-1 max-lg:row-span-1 flex flex-col px-6 lg:justify-start lg:items-start max-lg:justify-center max-lg:items-center ">
                    <h1 className={` ease-in duration-300 text-[1.5rem]  ${activeIndex==0? "text-white font-semibold":"text-gray-600"}`}> Hello world</h1>
					<div  className={` ease-in duration-300 px-[150px] h-1 ${activeIndex==0? "bg-white px-[200px] font-semibold":"bg-gray-600"}`}> </div>
					<h1 className={` ease-in duration-300 text-[1.5rem]  ${activeIndex==1? "text-white font-semibold":"text-gray-600"}`}> Hello world</h1>
					<div  className={` ease-in duration-300 px-[150px] h-1 ${activeIndex==1? "bg-white px-[200px] font-semibold":"bg-gray-700"}`}> </div>
					<h1 className={` ease-in duration-300 text-[1.5rem]  ${activeIndex==2? "text-white font-semibold":"text-gray-600"}`}> Hello world</h1>
					<div  className={` ease-in duration-300 px-[150px] h-1 ${activeIndex==2? "bg-white px-[200px] font-semibold":"bg-gray-800"}`}> </div>
					<h1 className={` ease-in duration-300 text-[1.5rem]  ${activeIndex==3? "text-white font-semibold":"text-gray-600"}`}> Hello world</h1>
					<div  className={` ease-in duration-300 px-[150px] h-1 ${activeIndex==3? "bg-white px-[200px] font-semibold":"bg-gray-900"}`}> </div>

				<div className="flex justify-between items-end px-4 self-end py-6 max-lg:hidden	">
                <button disabled={activeIndex==0} className="bg-transparent border border-white disabled:bg-green-500 rounded-full mr-2 w-10 h-10 flex justify-center text-white items-center" onClick={handlePrevButtonClick}><FaArrowLeft className="w-4 h-4"/></button>
                <button disabled={activeIndex==dataArr.length-1} onClick={handleNextButtonClick} className="bg-transparent border border-white rounded-full text-white  w-10 h-10 flex justify-center items-center disabled:bg-green-500"><FaArrowRight className="w-4 h-4"/></button>
                            </div>
                </div>
                <div className="lg:col-span-1 lg:px-4 max-lg:row-span-1">
			<Swiper
                ref={swiperRef}
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={30}
				slidesPerView={1}
				onSwiper={(swiper) => console.log(swiper.realIndex)}
				onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)
					
				}
			>
             
				{dataArr.map((mov, index) => {
					return (
						<SwiperSlide activeIndex className=" bg-slate-800  lg:px-10 max-lg:px-2 py-8">
							<div className="">
								<p className="text-white text-[12px]">{mov.para}</p>
                                </div>
						</SwiperSlide>
					);
				})}
                           
			</Swiper>
            </div>
			<div className="flex justify-center px-2 self-center py-6 lg:hidden	">
                <button disabled={activeIndex==0} className="bg-transparent border border-white disabled:bg-green-500 rounded-full mr-2 w-10 h-10 flex justify-center text-white items-center" onClick={handlePrevButtonClick}><FaArrowLeft className="w-4 h-4"/></button>
                <button disabled={activeIndex==dataArr.length-1} onClick={handleNextButtonClick} className="bg-transparent border border-white rounded-full text-white  w-10 h-10 flex justify-center items-center disabled:bg-green-500"><FaArrowRight className="w-4 h-4"/></button>
                            </div>
            </div>
		</div>
	);
};
export default SwiperDetail;
