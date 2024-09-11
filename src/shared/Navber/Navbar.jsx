import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

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
      <li><NavLink className="text-xl text-[#008080] font-bold" to="/">Home</NavLink></li>
      {/* <li><NavLink className="ml-3 text-[16px] font-bold" to="/dashBord">Bash Bord</NavLink></li> */}
      <li><NavLink className="text-xl text-[#008080] font-bold" to="/ourMenu">Our Menu</NavLink></li>
      <li><NavLink className="text-xl text-[#008080] font-bold" to="/orderFood/salad">Order Food</NavLink></li>
      <li><NavLink className="text-xl text-[#008080] font-bold" to="/contactUs">Contact Us</NavLink></li>
      <li><NavLink className="text-xl text-[#008080] font-bold" to="/login">Login</NavLink></li>
      <li><NavLink className="text-xl text-[#008080] font-bold" to="/register">Register</NavLink></li>
      <li>
        <NavLink className="text-xl text-[#008080] font-bold" to="/dashboard/cart">
          <button className="flex items-center justify-center gap-2">
            <i className="fa-solid fa-cart-plus text-[22px]"></i>
            {/* <div className="badge badge-secondary">+{cart.length}</div> */}
          </button>
        </NavLink>
      </li>
    </> //
  );
  return (
    <div className="navbar sticky inset-0 z-10  w-full max-w-full rounded-none border  bg-opacity-30 py-2 px-4 text-black shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-2 lg:py-2">
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
              <div className="flex-1 px-2 mx-2 text-xl md:text-2xl lg:text-2xl">Brosto Boss</div>
              <div className="flex-none hidden lg:block">
                <ul className=" menu menu-horizontal gap-5">
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
            <ul className="menu p-4 w-80 min-h-full bg-base-200 gap-10">
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
        {user ? (
          <>
            {/* <span>{user?.displayName}</span> */}
            <button
              onClick={handelSingOut}
              className="btn text-white hover:text-[#008080] md:text-xl lg:text-xl font-bold border-0"
            >
              Sing Out
            </button>
          </>
        ) : (
          <>
            <Link to="login">
              <button className="btn text-white hover:text-[#ff6347] md:text-xl lg:text-xl font-bold border-0">
                Login
              </button>
            </Link>
          </>
        )}
    </div>
  );
};

export default Navbar;
