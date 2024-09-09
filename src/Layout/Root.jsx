import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../shared/Navber/Navbar";
import Footer from "../shared/Footer/Footer"

const Root = () => {
    const location = useLocation();
    //------heaiding----navebar---&&---Footer-----
    const noHeaderFooter = location.pathname.includes('login') || 
    location.pathname.includes('register');
    return (
        <div>
            {noHeaderFooter ||  <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter ||  <Footer></Footer>}
        </div>
    );
};

export default Root;