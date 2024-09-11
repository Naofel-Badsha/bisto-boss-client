// import googleLogin from "../../assets/others/google.png";
// import gitHubLogin from "../../assets/others/github.png";
// import useAuth from "../../Hooks/useAuth";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  // const { googleSingIn } = useAuth();
  // const axiousPublic = useAxiosPublic();
  // const navigate = useNavigate();
  // const handelGoogleSingIn = () => {
  //   googleSingIn().then((result) => {
  //     console.log(result.user);
  //     const userInfo = {
  //       email: result.user?.email,
  //       name: result.user?.displayName,
  //     };
  //     axiousPublic.post("/users", userInfo).then((res) => {
  //       console.log(res.data);
  //       navigate("/");
  //     });
  //   });
  };
  return (
    <div className="flex items-center justify-around gap-5">
      <img
        onClick={handelGoogleSingIn}
        src={googleLogin}
        className="w-[45px] p-1 mb-8 cursor-pointer border-[2px] border-orange-500 rounded-full hover:border-sky-600"
      />
      <img
        src={gitHubLogin}
        className="w-[45px] p-1 mb-8 cursor-pointer border-[2px] border-orange-500 rounded-full hover:border-sky-600"
      />
    </div>
  );
};

export default SocialLogin;
