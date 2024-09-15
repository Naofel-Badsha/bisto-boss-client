import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/Contact/ContactUs";
import OurMenu from "../Pages/MenuPage/OurMenu/OurMenu";
import OrderFood from "../Pages/OrderFood/OrderFood/OrderFood";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
//------DashBoard------Routs-----Or-----Layou-------?
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/DashBoard/Cart/Cart";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";
import Reservation from "../Pages/DashBoard/Reservation/Reservation";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/PaymentHistory";
import AddReview from "../Pages/DashBoard/AddReview/AddReview";
import MyBooking from "../Pages/DashBoard/MyBooking/MyBooking";

const router = createBrowserRouter([
     {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
              path: '/ourMenu',
              element: <OurMenu></OurMenu>,
            },
            {
              path: 'orderFood/:category',
              element: <PrivateRoute><OrderFood></OrderFood></PrivateRoute>,
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
        ]
     },
     //----------Admin--------Routes---------?
     {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'userHome',
                element:<UserHome></UserHome> 
            },
            {
                path: 'reservation',
                element:<Reservation></Reservation> 
            },
            {
                path: 'paymentHistory',
                element:<PaymentHistory></PaymentHistory> 
            },
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'addReview',
                element: <AddReview></AddReview>
            },
            {
                path: 'myBooking',
                element: <MyBooking></MyBooking>
            },
        ]
     }

]);
export default router;