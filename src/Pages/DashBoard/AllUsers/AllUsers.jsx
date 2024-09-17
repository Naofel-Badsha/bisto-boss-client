import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../../../Hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  //----------Deleted---------user-------
  const handleDeleteUser = user => {
    console.log("Deleted user..?", user)
    Swal.fire({
      title: "Are you sure?",
      text: `${user.name} is Deleted!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`)
        .then(res => {
          console.log(res.data)
          if(res.data.deletedCount > 0){
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Deleted Successfull.",
              icon: "success"
            });

          }
        })
      }
    });
  }

  //----------Admin---------user-------
  const handleAdminUser = user => {
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res => {
      console.log(res.data)
      if(res.data.modifiedCount > 0){
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }
  return (
    <div>
      {/*----------Title---------*/}
      <div className="flex items-center justify-center">
        <SectionTitle
          subHeading={"How many??"}
          heading={"MANAGE ALL USERS"}
        ></SectionTitle>
      </div>
      {/*-----------------*/}
      {/*-----------Item-----&--------Price-------*/}
      <div className="">
        <h3 className="text-xl md:text-3xl lg:text-3xl">
          Total Users: {users.length}
        </h3>
      </div>
      <hr className="bg-[#008080] h-1 mt-5" />

      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr className="text-2xl font-bold bg-[#008080] text-white">
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/*--------row--------1--------*/}
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th className="text-xl text-black">{index + 1}</th>
                  <td className="text-xl text-black">{user.name}</td>
                  <td className="text-xl text-black">{user.email}</td>
                  <td>
                    {user.role === "admin" ? <h3 className="text-xl text-[#005d5d]">Admin</h3> : <button onClick={() => handleAdminUser(user)}
                     className="btn text-3xl text-white bg-[#008080] border-0 ">
                      <FaUsers />
                    </button>}
                  </td>
                  <td>
                    <button 
                    onClick={() => handleDeleteUser(user)}
                    className="btn text-3xl text-white bg-[#ff004f] border-0 ">
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
