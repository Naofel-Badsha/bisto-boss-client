import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/Contact/ContactUs";
import OurMenu from "../Pages/MenuPage/OurMenu/OurMenu";
import OrderFood from "../Pages/OrderFood/OrderFood/OrderFood";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivateRoute from "./PrivateRoute";
//------DashBoard------Routs-----Or-----Layou-------?
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/DashBoard/Cart/Cart";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";




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
                path: '/contactUs',
                element: <ContactUs></ContactUs>,
            },
            {
              path: '/ourMenu',
              element: <PrivateRoute><OurMenu></OurMenu></PrivateRoute>,
            },
            {
              path: '/orderFood/:category',
              element: <OrderFood></OrderFood>,
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
     {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
             path: 'cart',
             element: <Cart></Cart>
            },
            //----Admin Routes-----?
            {
                path: 'allUsers',
                element: <AllUsers></AllUsers>
            }
        ]
     }

]);
export default router;