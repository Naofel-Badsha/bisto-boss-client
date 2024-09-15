import useCart from "./../../../Hooks/useCart";
import SectionTitle from "./../../../Components/SectionTitle/SectionTitle";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from './../../../Hooks/useAxiosSecure';
const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  // const axiosSecure =  useAxiosSecure()
  //---------Delete-----cart-----Item-------
  const handelDeleteCard = (_id) => {
   console.log('deleted items----?', _id)

  //  axiosSecure.delete(`/carts${item._id}`)

  }
  
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
        <button className="btn bg-[#008080] text-white text-xl border-0">
          Pay
        </button>
      </div>
      <hr className="bg-[#008080] h-1 mt-5"/>

      {/*--------------Table-------------*/}
      <div className="overflow-x-auto w-full py-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-2xl font-bold text-black">
              <th>#</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/*---------row---------1---------*/}
            {
              cart.map((item, index) => <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask rounded-xl border-2 border-[#008080] h-20 w-20">
                        <img
                          src={item.image}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-xl text-black">{item.name}</td>
                <td className="text-xl text-black">$: {item.price}</td>
                <th>
                  <button onClick={() => handelDeleteCard(item._id)}
                  className="btn text-3xl text-white bg-[#008080] border-0 "><MdDelete /></button>
                </th>
              </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
