// import { useForm } from "react-hook-form";
// import registerImg from "../../assets/others/authentication2.png";
// import { Helmet } from "react-helmet-async";
// import { useContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
// import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  // const axiousPublic = useAxiosPublic();
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm();
  // const { createUser, updateUserProfile } = useContext(AuthContext);
  // const navigate = useNavigate();

  // const onSubmit = (data) => {
  //   createUser(data.email, data.password).then((result) => {
  //     const loggedUser = result.user;
  //     console.log(loggedUser);
  //     updateUserProfile(data.name, data.photoURL)
  //       .then(() => {
  //         //------Create user entry in  the Database-------?
  //         const userInfo = {
  //           name: data.name,
  //           email: data.email,
  //         };
  //         axiousPublic.post("/users", userInfo).then((res) => {
  //           if (res.data.insertedId) {
  //             console.log("user added successfull to The database");
  //             reset();
  //             Swal.fire({
  //               position: "top",
  //               icon: "success",
  //               title: "Your work has been saved",
  //               showConfirmButton: false,
  //               timer: 1500,
  //             });
  //             navigate("/");
  //           }
  //         });
  //       })
  //       .catch((error) => console.log(error));
  //   });
  // };
  return (
    <div className="container m-auto">
      {/* <Helmet>
        <title>Bristo Boss || Register Now</title>
      </Helmet> */}
      <h1 className="text-3xl font-bold text-center py-10">Register Now</h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <div className="text-center w-full lg:text-left">
            {/* <img src={registerImg} className="w-full" /> */}
          </div>
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
          {/* onSubmit={handleSubmit(onSubmit)} */}
            <form  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  // {...register("name", { required: true })}
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                />
                {/* {errors.name && (
                  <span className="text-red-500 mt-2">
                    This Name is required
                  </span>
                )} */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                {/* <input
                  type="text"
                  {...register("photo", { required: true })}
                  name="photo"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                /> */}
                {/* {errors.photo && (
                  <span className="text-red-500 mt-2">
                    This photo is required
                  </span>
                )} */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  // {...register("email", { required: true })}
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                />
              </div>
              {/* {errors.email && (
                <span className="text-red-500 mt-2">
                  This Email is required
                </span>
              )} */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  // {...register("password", {
                  //   required: true,
                  //   minLength: 6,
                  //   maxLength: 20,
                  // })}
                  name="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                />
                {/* {errors.password?.type === "required" && (
                  <p className="text-red-500 mt-2">Password is required</p>
                )} */}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Register"
                  className="btn w-full bg-orange-500 text-slate-900 text-lg font-bold py-2 cursor-pointer rounded-md"
                />
              </div>
              <p className="text-[18px]">
                <small className="font-bold">
                  New Here...?{" "}
                  {/* <Link to="/login" className="underline">
                    Creatr Account
                  </Link>{" "} */}
                </small>
              </p>
            </form>
            {/* <SocialLogin></SocialLogin> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
