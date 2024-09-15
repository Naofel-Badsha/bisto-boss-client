import { NavLink, Outlet } from "react-router-dom";
import { FaCalendar, FaCartPlus, FaHome,  } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { MdReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";
import { FaBasketShopping } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
const Dashboard = () => {
  return (
    <div className="flex">
      {/*-----------Sidebar-------------*/}
      <div className="w-72 min-h-screen bg-sky-700">
          <ul className="menu p-4">
            {/*----------1------------*/}
            <li className="py-3">
              <NavLink className="text-xl text-white " to="/dashboard/userHome"><FaHome/>User Home</NavLink>
            </li>
            {/*-----------2-----------*/}
            <li className="py-3">
              <NavLink className="text-xl text-white " to="/dashboard/reservation"><FaCalendar/>Reservation</NavLink>
            </li>
            {/*-----------3-----------*/}
            <li className="py-3">
              <NavLink className="text-xl text-white " to="/dashboard/paymentHistory"><MdPayments/>Payment History</NavLink>
            </li>
            {/*----------4------------*/}
            <li className="py-3">
              <NavLink className="text-xl text-white " to="/dashboard/cart"><FaCartPlus/> My Cart</NavLink>
            </li>
            {/*----------5------------*/}
            <li className="py-3">
              <NavLink className="text-xl text-white " to="/dashboard/addReview"><MdReviews/> Add Review</NavLink>
            </li>
            {/*----------6------------*/}
            <li className="py-3">
              <NavLink className="text-xl text-white " to="/dashboard/myBooking"><TbBrandBooking/> My Booking</NavLink>
            </li>
            {/*============================================================*/}
                              <hr className="mt-10 mb-10"/>
            {/*============================================================*/}

            {/*-----------Main-1-----------*/}
            <li className="py-3">
              <NavLink className="text-xl text-white " to="/"><FaHome/>Home</NavLink>
            </li>
            {/*----------Main-2------------*/}
            <li className="py-3">
              <NavLink className="text-xl text-white " to="/ourMenu"><IoMenu/> MEnu</NavLink>
            </li>
            {/*----------Main-3------------*/}
            <li className="py-3">
              <NavLink className="text-xl text-white " to="/orderFood/:category"><FaBasketShopping/> Shop</NavLink>
            </li>
            {/*----------Main-4------------*/}
            <li className="py-3">
              <NavLink className="text-xl text-white " to="/contactUs"><MdMessage /> Contact</NavLink>
            </li>
          </ul>
      </div>
      {/*-----------MainContent-------------*/}
      <div className="flez-1 w-full p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
