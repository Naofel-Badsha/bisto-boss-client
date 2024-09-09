import Swal from "sweetalert2";

import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const hendleAddToCart = () => {
    if (user && user.email) {
      //---send cart item to the database------?
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      //-------post cart user by client side to database-------?
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: `${name} Added to the Cart..!`,
            showConfirmButton: false,
            timer: 1500,
          });
          //----reface cart to update the cart items count----
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In...! ",
        text: "Please login to add to the Cart...?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          //---send the user to the login page...?
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card bg-base-100 shadow-xl border-2 border-[#008080] ">
        <figure className="px-3 pt-5">
          <div className="w-full h-[300px] overflow-hidden">
            <img src={image} className="object-cover w-full " />
          </div>
        </figure>
        <p className="absolute right-0 mr-4 mt-4 text-[20px] font-bold bg-[#008080] rounded-md px-4 text-white">
          $:{price}
        </p>
        <div className="card-body items-center justify-center text-center">
          <h2 className="card-title text-[#008080]">{name}</h2>
          <p className="text-[16px]">{recipe}?</p>
          <div className="card-actions">
            <button
              onClick={hendleAddToCart}
              className="btn btn-outline bg-slate-200 border-0 border-b-4 border-orange-400"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
