import FoodCard from "../../../Components/FoodCard/FoodCard";

// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

const OrderTab = ({ items }) => {
  // const pagination = {
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return '<span class="' + className + '">' + (index + 1) + '</span>';
  //   },
  // };
  return (
    <div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-10">
        {items.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default OrderTab;
