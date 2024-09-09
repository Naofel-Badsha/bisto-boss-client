import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import banner1 from "../../assets/home/01.jpg";
import banner2 from "../../assets/home/02.jpg";
import banner3 from "../../assets/home/03.png";
import banner4 from "../../assets/home/04.jpg";
import banner5 from "../../assets/home/05.png";
import banner6 from "../../assets/home/06.png";
const Banner = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={true}
        // grabCursor={true}
        delay={"100"}
        loop={true}
        pagination={{ clickable: true }}>

        {/*----------Slider----------1--------*/}
        <SwiperSlide>
          <img
            src={banner1}
            style={{ width: "100%", height: "100vh" }}
          />
        </SwiperSlide>
        {/*----------Slider----------2--------*/}
        <SwiperSlide>
          <img
           src={banner2}
            style={{ width: "100%", height: "100vh" }}
          />
        </SwiperSlide>
        {/*----------Slider----------3--------*/}
        <SwiperSlide>
          <img
            src={banner3}
            style={{ width: "100%", height: "100vh" }}
          />
        </SwiperSlide>
        {/*----------Slider----------4--------*/}
        <SwiperSlide>
          <img
            src={banner4}
            style={{ width: "100%", height: "100vh" }}
          />
        </SwiperSlide>
        {/*----------Slider----------5--------*/}
        <SwiperSlide>
          <img
            src={banner5}
            style={{ width: "100%", height: "100vh" }}
          />
        </SwiperSlide>
        {/*----------Slider----------6--------*/}
        <SwiperSlide>
          <img
            src={banner6}
            style={{ width: "100%", height: "100vh" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
