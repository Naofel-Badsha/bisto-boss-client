import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
// import { useContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  // const axiousPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();
  // const { createUser, updateUserProfile } = useContext(AuthContext);
  // const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data)
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
  //   }
  // );
  };
  return (
    <div className="container m-auto">
      <Helmet>
        <title>Bristo || Register Now</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center py-10">Register Now</h1>
      <div className="hero min-h-screen shadow-2x">
        <div className="flex flex-col lg:flex-row gap-10">
          {/*------------------Image---------------*/}
          <div className="text-center flex-1">
            <img src="https://i.ibb.co.com/n150Rkj/E9-Tta-Yg-KZu.gif" className="w-full rounded-xl h-full border-2 border-[#008080]" />
          </div>
          {/*------------------From---------------*/}
          <div className="card shadow-2xl flex-1">
            <form  onSubmit={handleSubmit(onSubmit)} className="card-body rounded-xl border-2 border-[#008080]">
              {/*---------Input--------1---------*/}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-black font-bold">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered w-full text-xl text-black bg-slate-200"
                />
                {errors.name && (
                  <span className="text-red-500 mt-2">
                    This Name is required
                  </span>
                )}
              </div>
              {/*---------Input--------2---------*/}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-black font-bold">Photo</span>
                </label>
                <input
                  type="text"
                  {...register("photo", { required: true })}
                  name="photo"
                  placeholder="Enter Your Name"
                  className="input input-bordered w-full text-xl text-black bg-slate-200"
                />
                {errors.photo && (
                  <span className="text-red-500 mt-2">
                    This photo is required
                  </span>
                )}
              </div>
              {/*---------Input--------3---------*/}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-black font-bold">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered w-full text-xl text-black bg-slate-200"
                />
                {errors.email && (
                <span className="text-red-500 mt-2">
                  This Email is required
                </span>
              )}
              </div>
              {/*---------Input--------4---------*/}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-black font-bold">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                  name="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered w-full text-xl text-black bg-slate-200"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500 mt-2">Password is required</p>
                )}
                {errors.password?.minLength > 6 ?  "" : "Password use 6 Carrecter" }
              </div>
              {/*---------Input--------5---------*/}
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Register"
                  className="btn w-full bg-orange-500 text-slate-900 hover:text-white duration-100 border-0 h text-lg font-bold py-2 cursor-pointer rounded-md"
                />
              </div>
              <p className="text-[18px]">
                <small className="font-bold">
                  New Here...?{" "}
                  <Link to="/login" className="underline">
                    Creatr Account
                  </Link>{" "}
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
