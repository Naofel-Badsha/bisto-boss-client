// import {
//   loadCaptchaEnginge,
//   LoadCanvasTemplate,
//   validateCaptcha,
// } from "react-simple-captcha";

// import loginImg from "../../assets/others/authentication1.png";

// import { useContext, useEffect,  } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  // const [disabled, setDisabled] = useState(true);
  // const { singIn } = useContext(AuthContext);
  // const navigate = useNavigate();
  // const location = useLocation();

  // const from = location.state?.from?.pathname || "/";
  console.log("staate on thr location login page", location.state);

  //----------Captha------------?
  // useEffect(() => {
  //   loadCaptchaEnginge(6);
  // }, []);

  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    //---------Login-----user---------?
    // singIn(email, password)
    //   .then((res) => {
    //     const user = res.user;
    //     console.log(user);
    //     navigate(from, { replace: true });
    //     return toast.success("User Creatt a successfully");
    //   })
    //   .then((error) => {
    //     console.log(error);
    //   });
  };

  const hadelvalidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    // if (validateCaptcha(user_captcha_value)) {
    //   setDisabled(false);
    // } else {
    //   setDisabled(true);
    // }
  };
  return (
    <div className="container m-auto">
      {/* <Helmet>
        <title>Bristo Boss || Login Now</title>
      </Helmet> */}
      <h1 className="text-3xl font-bold text-center py-10">Login Now</h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <div className="text-center lg:text-left">
            {/* <img src={loginImg} className="w-full rounded-xl" /> */}
          </div>
          <div className="card w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered w-full"
                  required
                />
                <label className="label">
                  <a href="#" className="text-base link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={hadelvalidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type the Captcha above"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={false}
                  type="submit"
                  value="Login"
                  className="btn w-full bg-orange-500 text-slate-900 text-lg font-bold py-2 cursor-pointer rounded-md"
                />
              </div>
              <p className="text-[18px]">
                <small className="font-bold">
                  New Here...?{" "}
                  {/* <Link to="/register" className="underline">
                    Logged Account
                  </Link>{" "} */}
                </small>
              </p>
            </form>
            <div>
              {/* <SocialLogin></SocialLogin> */}
            </div>
          </div>
        </div>
      </div>
      {/* <ToastContainer></ToastContainer> */}
    </div>
  );
};

export default Login;
