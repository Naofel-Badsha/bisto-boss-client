import FoodCard from "../../../Components/FoodCard/FoodCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const OrderTab = ({items}) => {
  const pagination = {
    // clickable: true,
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + '</span>';
    // },
  };
  return (
    <div >
    <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderTab;
