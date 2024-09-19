import useCart from "./../../../Hooks/useCart";
import SectionTitle from "./../../../Components/SectionTitle/SectionTitle";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "./../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  //---------Delete-----cart-----Item-------
  const handelDeleteCard = (_id) => {
    console.log("deleted items----?", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "Cart items delete...!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${_id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your cart items deleted successfylly",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div>
      {/*----------Title---------*/}
      <div className="flex items-center justify-center">
        <SectionTitle
          subHeading={"My Cart"}
          heading={"WANNA ADD MORE?"}
        ></SectionTitle>
      </div>
      {/*-----------Item-----&--------Price-------*/}
      <div className="flex items-center justify-evenly gap-6">
        <h3 className="text-xl md:text-3xl lg:text-3xl">
          Total Items: {cart.length}
        </h3>
        <h3 className="text-xl md:text-3xl lg:text-3xl">
          Total Price: {totalPrice}
        </h3>
        {cart.length ? <Link to="/dashboard/reservation">
          <button  className="btn bg-[#008080] text-white text-xl border-0">
            Pay
          </button>
        </Link> :
        <button disabled  className="btn bg-[#008080] text-white text-xl border-0">
          Pay
        </button>
        }
      </div>
      <hr className="bg-[#008080] h-1 mt-5" />

      {/*--------------Table-------------*/}
      <div className="overflow-x-auto w-full py-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-2xl font-bold bg-[#008080] text-white">
              <th>#</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/*---------row---------1---------*/}
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask rounded-xl border-2 border-[#008080] h-20 w-20">
                        <img src={item.image} />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-xl text-black">{item.name}</td>
                <td className="text-xl text-black">$: {item.price}</td>
                <th>
                  <button
                    onClick={() => handelDeleteCard(item._id)}
                    className="btn text-3xl text-white bg-[#ff004f] border-0 "
                  >
                    <MdDelete />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
