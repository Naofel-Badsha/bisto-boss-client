import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { singIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const form = location.state?.from?.pathname || "/";
  console.log("staate on thr location login page", location.state);

  //----------Captha------------?
  // const captchaRef = useRef(null);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

  //---------Login-----user---------?
    singIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(form, { replace: true });
        return toast.success("User Creatt a success");
      })
      .then((error) => {
        console.log(error);
      });
  };

  const hadelvalidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div className="container m-auto">
      <Helmet>
        <title>Bristo || Login Now</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center py-10">Login Now</h1>
      <div className="hero min-h-screen shadow-2xl">
        <div className="flex flex-col lg:flex-row gap-10">
          {/*------------------Image---------------*/}
          <div className="text-center flex-1">
            <img
              src="https://i.ibb.co.com/HKy5dSS/login.gif"
              className="w-full rounded-xl h-full border-2 border-[#008080]"
            />
          </div>
          {/*------------------From---------------*/}
          <div className="card shadow-2xl flex-1">
            <form onSubmit={handelLogin} className="card-body rounded-xl border-2 border-[#008080]">
              {/*---------Input--------1---------*/}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-black font-bold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered w-full text-xl text-black bg-slate-200"
                  required
                />
              </div>
              {/*---------Input--------2---------*/}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-black font-bold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered w-full text-xl text-black bg-slate-200"
                />
              </div>
              {/*---------Input--------3---------*/}
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={hadelvalidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type the Captcha above"
                  className="input input-bordered w-full text-xl text-black bg-slate-200"
                />
                <div className="w-full mt-8">
                  <button
                    onClick={hadelvalidateCaptcha}
                    className="btn btn-active btn-neutral text-xl w-full"
                  >
                    Validat
                  </button>
                </div>
              </div>
              {/*---------Input--------4---------*/}
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  type="submit"
                  value="Login"
                  className="btn w-full bg-orange-500 text-slate-900 hover:text-white duration-100 border-0 h text-lg font-bold py-2 cursor-pointer rounded-md"
                />
              </div>
              <p className="text-[18px]">
                <small className="font-bold">
                  New Here...?{" "}
                  <Link to="/register" className="underline">
                    Logged Account
                  </Link>{" "}
                </small>
              </p>
            </form>
            <div>
              {/* <SocialLogin></SocialLogin> */}
              </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
