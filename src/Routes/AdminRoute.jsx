import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

  if (loading || isAdminLoading) {
    return <div className="flex item-center justify-center"> <img src="https://i.ibb.co.com/6Bt99B3/loding-3.gif" className="w-[200px] " /></div>
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{from: location}} replace></Navigate>

};

export default AdminRoute;