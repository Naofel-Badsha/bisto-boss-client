
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

// import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <div className="flex item-center justify-center"> <img src="https://i.ibb.co.com/6Bt99B3/loding-3.gif" className="w-[200px] " /></div>
  }
  if (user) {
    return children;
  }
  return <Navigate to="/" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;
