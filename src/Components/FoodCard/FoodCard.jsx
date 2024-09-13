import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const FoodCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const {user} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure()

  const handleAddToCart = food => {
    console.log("Add to cart", food);
    if(user && user.email){
      console.log(user.email)

      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts', cartItem)
      .then(res => {
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} added to your Cart`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
    }else{
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}})
        }
      });
    }

  }

  return (
    <div>
      <div className="card shadow-xl border-2 border-[#008080] h-full">
        <div className="h-[300px] w-full">
          <img src={image} className="object-cover h-[300px] w-full rounded-t-[15px]" />
        </div>
        <p className="absolute right-0 mr-4 mt-4 text-[20px] font-bold bg-[#008080] rounded-md px-4 text-white">
          $:{price}
        </p>
        <div className="card-body items-center justify-center text-center">
          <h2 className="card-title text-[#008080]">{name}</h2>
          <p className="text-xl py-2">{recipe}?</p>
          <div className="card-actions">
            <button onClick={() => handleAddToCart(item)}
             className="btn hover:text-white bg-slate-200 duration-100 text-black text-xl border-0 border-b-4 border-orange-400">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
