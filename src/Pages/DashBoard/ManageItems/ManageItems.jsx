import { MdDelete } from "react-icons/md";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaEdit } from "react-icons/fa";
import useMenu from "../../../Hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  //--------handelDeleteItem----
  const handelDeleteItem = (item) => {
    // console.log('Deletes spacfic menu items', item)
    Swal.fire({
      title: "Are you sure?",
      text: `${menu.name} is Deleted!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async(result) => {
      if (result.isConfirmed) {
     const res = await axiosSecure.delete(`/menu/${menu._id}`)
     console.log(res.data)
     // .then(res => {
        //   if(res.data.deletedCount > 0){
        //     refetch()
        //     Swal.fire({
        //       title: "Deleted!",
        //       text: "Deleted Successfull.",
        //       icon: "success"
        //     });
        //   }
        // })
      }
    });
  };

  return (
    <div>
      {/*----------Title---------*/}
      <div className="flex items-center justify-center">
        <SectionTitle
          subHeading={"Hurry Up?"}
          heading={"MANAGE ALL ITEMS"}
        ></SectionTitle>
      </div>
      <div className="">
        <h3 className="text-xl md:text-3xl lg:text-3xl">
          Total Menu: {menu.length}
        </h3>
      </div>
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
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/*---------row---------1---------*/}
            {menu.map((item, index) => (
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
                  <Link to={`/dashboard/upadteItems/${item._id}`}>
                  <button
                    // onClick={() => handelUpdateItem(item._id)}
                    className="btn text-3xl text-white bg-[#008080] border-0 "
                  >
                    <FaEdit />
                  </button>
                  </Link>
                </th>
                <th>
                  <button
                    onClick={() => handelDeleteItem(item)}
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

export default ManageItems;
