"use client"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import {  useState,useRef } from "react";


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
	const onClicktest=(num)=>{
		setActiveIndex(num); // Set active index to 3 to update the styling of the fourth h1 tag

    // Move the slider to the fourth element
    const swiper = swiperRef.current.swiper;
    swiper.slideTo(num);
	}
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
		<div className="container mx-auto py-4 ">
            <div className="lg:grid  lg:grid-cols-2   max-lg:px-2 lg:px-48 gap-2 ">
                <div className=" lg:col-span-1 lg:col-start-1 max-lg:row-start-1 max-lg:row-span-1 flex flex-col px-6 lg:justify-start lg:items-start max-lg:justify-center max-lg:items-center max-lg:py-6  ">
                    <h1 onClick={onClicktest.bind(null,0)}  className={` hover:cursor-pointer ease-in duration-300  text-[1.5rem]  ${activeIndex==0? "text-white font-semibold":"text-gray-600"}`}> Hello world</h1>
					<div  className={` ease-in duration-300 px-[150px] max-lg:px-[120px] h-1 ${activeIndex==0? "bg-white max-lg:px-[160px] px-[200px] font-semibold":"bg-gray-600"}`}> </div>
					<h1 onClick={onClicktest.bind(null,1)} className={`hover:cursor-pointer ease-in duration-300 text-[1.5rem]   ${activeIndex==1? "text-white font-semibold":"text-gray-600"}`}> Hello world</h1>
					<div  className={` ease-in duration-300 px-[150px] max-lg:px-[120px] h-1 ${activeIndex==1? "bg-white max-lg:px-[160px] px-[200px] font-semibold":"bg-gray-700"}`}> </div>
					<h1 onClick={onClicktest.bind(null,2)} className={`hover:cursor-pointer ease-in duration-300 text-[1.5rem]  ${activeIndex==2? "text-white font-semibold":"text-gray-600"}`}> Hello world</h1>
					<div  className={` ease-in duration-300 px-[150px] max-lg:px-[120px] h-1 ${activeIndex==2? "bg-white max-lg:px-[160px] px-[200px] font-semibold":"bg-gray-800"}`}> </div>
					<h1 onClick={onClicktest.bind(null,3)} className={` hover:cursor-pointer ease-in duration-300 text-[1.5rem]  ${activeIndex==3? "text-white font-semibold":"text-gray-600"}`}> Hello world</h1>
					<div  className={` ease-in duration-300 px-[150px] max-lg:px-[120px] h-1 ${activeIndex==3? "bg-white max-lg:px-[160px] px-[200px] font-semibold":"bg-gray-900"}`}> </div>

				<div className="flex justify-between items-end px-4 self-end py-6 max-lg:hidden	">
                <button disabled={activeIndex==0} className="bg-transparent border border-white disabled:bg-green-500 rounded-full mr-2 w-10 h-10 flex justify-center text-white items-center" onClick={handlePrevButtonClick}><FaArrowLeft className="w-4 h-4"/></button>
                <button disabled={activeIndex==dataArr.length-1} onClick={handleNextButtonClick} className="bg-transparent border border-white rounded-full text-white  w-10 h-10 flex justify-center items-center disabled:bg-green-500"><FaArrowRight className="w-4 h-4"/></button>
                            </div>
                </div>
              <div className="max-lg:px-4">
			<Swiper
                ref={swiperRef}
				spaceBetween={30}
				slidesPerView={1}
				onSwiper={(swiper) => console.log(swiper.activeIndex)}
				onSlideChange={(swiper) =>  setActiveIndex(swiper.activeIndex)}
			>
             
			 {dataArr.map((mov, index) => {
					return (<div className="">
						<SwiperSlide activeindex className=" bg-slate-700 px-2 py-2 rounded-xl ease-in duration-500">
								<p className="text-white text-[12px] text-center py-8 " >{mov.para}</p>
						</SwiperSlide>
						</div>
					);
				})}
						
					
			
                           
			</Swiper>
			</div>
			<div className="flex justify-center px-2 self-center py-6 lg:hidden	">
                <button disabled={activeIndex==0} className="bg-transparent  border border-white disabled:bg-green-500 rounded-full mr-2 w-10 h-10 flex justify-center text-white items-center" onClick={handlePrevButtonClick}><FaArrowLeft className="w-4 h-4"/></button>
                <button disabled={activeIndex==dataArr.length-1} onClick={handleNextButtonClick} className="bg-transparent border border-white rounded-full text-white  w-10 h-10 flex justify-center items-center disabled:bg-green-500"><FaArrowRight className="w-4 h-4"/></button>
                            </div>
            </div>
		</div>
	);
};
export default SwiperDetail;
