import { useSwiper } from "swiper/react";

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return <button className="bg-white" onClick={() => swiper.slideNext()}>{children}</button>;
};
export default SwiperButtonNext