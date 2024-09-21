import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./../../Provider/AuthProvider";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  const handelSingOut = () => {
    logOut()
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navLink = (
    <>
      <li><NavLink className="text-[16px] text-[#008080] border-2 border-[#008080]" to="/">Home</NavLink></li>
      <li><NavLink className="text-[16px] text-[#008080] border-2 border-[#008080]" to="/ourMenu">Our Menu</NavLink></li>
      <li><NavLink className="text-[16px] text-[#008080] border-2 border-[#008080]" to="/orderFood/salad">Order Food</NavLink></li>
      <li><NavLink className="text-[16px] text-[#008080] border-2 border-[#008080]" to="/contactUs">Contact Us</NavLink></li>
      {
        // user ? "true" : 'false'
        // user ? condition? : "double true" : "one true" : "false"
      }
      {user && isAdmin && <li><NavLink className="text-[16px] text-[#008080] border-2 border-[#008080]" to="/dashboard/adminHome">Dashboard</NavLink></li>}
      {user && !isAdmin && <li><NavLink className="text-[16px] text-[#008080] border-2 border-[#008080]" to="/dashboard/userHome">Dashboard</NavLink></li>}

      <li>
        <NavLink className="text-xl text-[#008080] font-bold border-2 border-[#008080]" to="/dashboard/cart">
          <button className="flex items-center justify-center gap-2">
            <i className="fa-solid fa-cart-plus text-[22px]"></i>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </NavLink>
      </li>
    </> 
  );
  return (
    <div className="navbar sticky inset-0 z-10  w-full max-w-full rounded-none bg-opacity-30 py-2 px-4 text-black shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-2 lg:py-2">
        {/*---max-w-[1200px] m-auto---*/}
        <nav className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-full navbar">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <i className="fa-solid fa-bars text-2xl hover:rotate-45"></i>
                </label>
              </div>
              <div className="flex-1 px-2 text-xl md:text-2xl lg:text-2xl">BBoss</div>
              <div className="flex-none hidden lg:block">
                <ul className=" menu menu-horizontal gap-4">
                  {/* Navbar menu content here */}
                  {navLink}
                </ul>
              </div>
            </div>
            {/* Page content here */}
          </div>
          <div className="drawer-side z-50">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu w-60 md:w-72 lg:w-80 min-h-full bg-base-200">
              {/* Sidebar content here */}
              <NavLink className="">{navLink}</NavLink>
            </ul>
          </div>
        </nav>
        {/*----------------*/}
        <img
          className="w-[40px] mr-2 rounded-full"
          src={
            user?.photoURL ? user.photoURL : "https://i.ibb.co/Y79Vw8B/user.png"
          }
        />
        {/* <span>{user?.displayName}</span> */}
        {user ? (
          <>
            <button
              onClick={handelSingOut}
              className="btn bg-black text-white hover:text-white hover:bg-[#008080]  md:text-xl lg:text-xl font-bold border-0"
            >
              Sing Out
            </button>
          </>
        ) : (
          <>
            <Link to="login">
              <button className="btn bg-black text-white hover:text-white hover:bg-[#008080]  md:text-xl lg:text-xl font-bold border-0">
                Login
              </button>
            </Link>
          </>
        )}
    </div>
  );
};

export default Navbar;
