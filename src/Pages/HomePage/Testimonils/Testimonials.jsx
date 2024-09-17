// -------Swiper----Slider-----
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// -------Swiper----Slider-----

//-----React---reatio------
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
//-----React---reatio------

//-------data---Lode---by------json----
import { useEffect, useState } from "react";
import SectionTitle from "./../../../Components/SectionTitle/SectionTitle";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="container m-auto py-10">
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>
      <div>
        <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center m-24  text-center">
                <Rating style={{ maxWidth: 180 }} value={review.rating} isRequired />
                <i className="fa-solid fa-quote-right text-6xl py-3 text-[#008080]"></i>
                <p className="py-3">{review.details}</p>
                <h3 className="text-2xl text-[#008080] font-bold">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
