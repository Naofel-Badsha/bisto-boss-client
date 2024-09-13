import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
    //------Tan----Stack-----Query-----
    const axiosSecure = useAxiosSecure();
    //----Loggdin user er data golu daker jonno----
    const {user} = useAuth()
    const {refetch, data: cart= []} = useQuery({
      queryKey: ['cart', user?.email],
      queryFn: async () => {
       const res = await axiosSecure.get(`/carts?email=${user.email}`)
       return res.data;
      }
    })
    return [cart, refetch]
};

export default useCart;