import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaDollarSign } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { GiAmpleDress } from "react-icons/gi";
import { FaFirstOrder } from "react-icons/fa";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  return (
    <div>
      {/*----------Title---------*/}
      <div className="flex items-center justify-center">
        <SectionTitle subHeading={"I am?"} heading={"Admin"}></SectionTitle>
      </div>
      {/*-----------------*/}
      {/*-----------Item-----&--------Price-------*/}
      <div className="">
        <h3 className="text-xl md:text-3xl lg:text-3xl">
          <span>Hi, WellCome</span>{" "}
          {user?.displayName ? user.displayName : "Back!"}
        </h3>
      </div>

      {/*------------stat-------------*/}
      <div className="flex flex-col lg:flex-row gap-5">
        {/*------------stat------1-------*/}
        <div className="rounded-lg bg-base-100 w-full shadow-xl text-white py-6 px-6">
          <div className="flex items-center  justify-center gap-4">
            <FaDollarSign className="text-4xl" />
            <div>
              {/* <div className="stat-value">{stats.revenue}</div> */}
              <div className="text-2xl">Revenue</div>
            </div>
          </div>
        </div>
        {/*------------stat------2-------*/}
        <div className="rounded-lg bg-base-100 w-full shadow-xl text-white py-6 px-6">
          <div className="flex items-center  justify-center gap-4">
            <FaUsers className="text-4xl" />
            <div>
              {/* <div className="stat-value">{stats.users}</div> */}
              <div className="text-2xl">Users</div>
            </div>
          </div>
        </div>
        {/*------------stat------3-------*/}
        <div className="rounded-lg bg-base-100 w-full shadow-xl text-white py-6 px-6">
          <div className="flex items-center justify-center gap-4">
            <GiAmpleDress className="text-4xl" />
            <div>
              {/* <div className="stat-value">{stats.menuItems}</div> */}
              <div className="text-2xl">Users</div>
            </div>
          </div>
        </div>
        {/*------------stat------4-------*/}
        <div className="rounded-lg bg-base-100 w-full shadow-xl text-white py-6 px-6">
          <div className="flex items-center justify-center gap-4">
            <FaFirstOrder className="text-4xl" />
            <div>
              {/* <div className="stat-value">{stats.orders}</div> */}
              <div className="text-2xl">Orders</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
