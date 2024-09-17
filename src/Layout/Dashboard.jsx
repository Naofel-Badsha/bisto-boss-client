import { NavLink, Outlet } from "react-router-dom";
import { FaCalendar, FaCartPlus, FaHome,  } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { MdReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";
import { FaBasketShopping } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { MdOutlineFoodBank } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import useCart from "../Hooks/useCart";


const Dashboard = () => {
  const [cart] = useCart();

  const isAdmin = true;
  return (
    <div className="flex">
      {/*-----------Sidebar-------------*/}
      <div className="w-72 min-h-screen bg-sky-800">
          <ul className="menu p-4">
           { 
            isAdmin ? <>
            {/*---------Admin-1------------*/}
            <li className="py-3">
               <NavLink className="text-xl text-white " to="/dashboard/adminHome"><FaHome/>Admin Home</NavLink>
            </li>
            {/*---------Admin-2------------*/}
            <li className="py-3">
               <NavLink className="text-xl text-white " to="/dashboard/addItems"><MdOutlineFoodBank/>Add Items</NavLink>
            </li>
            {/*---------Admin-3------------*/}
            <li className="py-3">
               <NavLink className="text-xl text-white " to="/dashboard/manageItems"><AiOutlineBars/>Manage Items</NavLink>
            </li>
            {/*---------Admin-4------------*/}
            <li className="py-3">
               <NavLink className="text-xl text-white " to="/dashboard/managebooking"><FaBook/>Manage Bookings</NavLink>
            </li>
            {/*---------Admin-5------------*/}
            <li className="py-3">
               <NavLink className="text-xl text-white " to="/dashboard/allUsers"><FaUsers/>All Users</NavLink>
            </li>
            </>
            :
            <>
            {/*-----------User-1------------*/}
            <li className="py-3">
              <NavLink className="text-xl text-white " to="/dashboard/userHome"><FaHome/>User Home</NavLink>
            </li>
            {/*-----------User-2-----------*/}
            <li className="py-3">
              <NavLink className="text-xl text-white " to="/dashboard/reservation"><FaCalendar/>Reservation</NavLink>
            </li>
            {/*-----------User-3-----------*/}
            <li className="py-3">
              <NavLink className="text-xl text-white " to="/dashboard/paymentHistory"><MdPayments/>Payment History</NavLink>
            </li>
            {/*----------User-4------------*/}
            <li className="py-3">
              <NavLink className="text-xl text-white " to="/dashboard/cart"><FaCartPlus/> My Cart ({cart.length})</NavLink>
            </li>
            {/*----------User-5------------*/}
            <li className="py-3">
              <NavLink className="text-xl text-white " to="/dashboard/addReview"><MdReviews/> Add Review</NavLink>
            </li>
            {/*----------User-6------------*/}
            <li className="py-3">
              <NavLink className="text-xl text-white " to="/dashboard/myBooking"><TbBrandBooking/> My Booking</NavLink>
            </li>
            </>
            }

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
