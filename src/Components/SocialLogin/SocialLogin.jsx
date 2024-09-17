import googleLogin from "../../assets/others/google.png";
import gitHubLogin from "../../assets/others/github.png";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSingIn } = useAuth();
  const axiousPublic = useAxiosPublic();
  const navigate = useNavigate();
  
  const handelGoogleSingIn = () => {
    googleSingIn()
    .then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiousPublic.post("/users", userInfo)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div className="flex items-center justify-around">
      <img
        onClick={handelGoogleSingIn}
        src={googleLogin}
        className="w-[45px] cursor-pointer border-[2px] border-[#008080] rounded-full hover:-translate-y-1 duration-100"
      />
      <img
        src={gitHubLogin}
        className="w-[45px] cursor-pointer border-[2px] border-[#008080] rounded-full hover:-translate-y-1 duration-100"
      />
    </div>
  );
};

export default SocialLogin;
