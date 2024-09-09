
import { Navigate, useLocation } from "react-router-dom";

// import loadingSpinner from "../assets/others/loader2.gif";
// import useAuth from "../Hooks/useAuth";
// { children }
const PrivateRoute = () => {
  // const { user, loading } = useAuth();
  const loaction = useLocation();
  // if (loading) {
  //   return <div className="flex item-center justify-center"> <img src={loadingSpinner} className="w-[200px] " /></div>
    
  // }
  // if (user) {
  //   return children;
  // }
  return <Navigate to="/login" state={{from: loaction}} replace></Navigate>;
};

export default PrivateRoute;
