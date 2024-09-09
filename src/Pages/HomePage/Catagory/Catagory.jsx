import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Catagory.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Catagory = () => {
  return (
    <div className="container m-auto mt-10">
      <div className="">
        <section>
          <SectionTitle
            subHeading={"From 11:00am to 10:00Pm"}
            heading={"ORDER ONLINE"}
          ></SectionTitle>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={15}
            slidesPerView={1}
            navigation
            autoplay={true}
            grabCursor={true}
            delay={"100"}
            loop={true}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {/*--------Catagory-------1-----*/}
            <ul>
              <li className="relative">
                <SwiperSlide>
                  <img
                    src="https://i.ibb.co.com/vXyTqVL/salad.jpg"
                    style={{ width: "100%", height: "40vh", objectFit: "cover", opacity: "0.5" }}
                  />
                  <div className="absolute">
                    <h1 className=" mt-60 text-3xl md:text-3xl lg:text-3xl  text-black font-bold ">
                      Salads
                    </h1>
                  </div>
                </SwiperSlide>
              </li>
            </ul>
            {/*--------Catagory-------2-----*/}
            <ul>
              <li className="relative">
                <SwiperSlide>
                  <img
                    src="https://i.ibb.co.com/GQNdFsL/soups.jpg"
                    style={{ width: "100%", height: "40vh", objectFit: "cover", opacity: "0.5" }}
                  />
                  <div className="absolute">
                    <h1 className=" mt-60 text-3xl text-black font-bold ">
                      Soups
                    </h1>
                  </div>
                </SwiperSlide>
              </li>
            </ul>
            {/*--------Catagory-------3-----*/}
            <ul>
              <li className="relative">
                <SwiperSlide>
                  <img
                    src="https://i.ibb.co.com/Nmmbm8H/pizza.jpg"
                    style={{ width: "100%", height: "40vh", objectFit: "cover", opacity: "0.5" }}
                  />
                  <div className="absolute">
                    <h1 className=" mt-60 text-3xl text-black font-bold">
                      pizzas
                    </h1>
                  </div>
                </SwiperSlide>
              </li>
            </ul>
            {/*--------Catagory-------4-----*/}
            <ul>
              <li className="relative">
                <SwiperSlide>
                  <img
                    src="https://i.ibb.co.com/myt0NwK/desserts.jpg"
                    style={{ width: "100%", height: "40vh", objectFit: "cover", opacity: "0.5" }}
                  />
                  <div className="absolute">
                    <h1 className=" mt-60 text-3xl text-black font-bold">
                      desserts
                    </h1>
                  </div>
                </SwiperSlide>
              </li>
            </ul>
            {/*--------Catagory-------5-----*/}
            <ul>
              <li className="relative">
                <SwiperSlide>
                  <img
                    src="https://i.ibb.co.com/FVXddN7/chicken.jpg"
                    style={{ width: "100%", height: "40vh", objectFit: "cover", opacity: "0.5" }}
                  />
                  <div className="absolute">
                    <h1 className=" mt-60 text-3xl text-black font-bold">
                      Chicken
                    </h1>
                  </div>
                </SwiperSlide>
              </li>
            </ul>
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default Catagory;
