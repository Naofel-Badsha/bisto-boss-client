import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from './../../../Hooks/useAxiosSecure';
import { FaUsers } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const PaymentHistory = () => {
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();

  const{data: payments = []} = useQuery({
    queryKey: ['payments', user.email],
    queryFn: async () =>{
      const res = await axiosSecure.get(`/payments/${user.email}`)
      return res.data; 
    }

  })
  return (
    <div>
      {/*----------Title---------*/}
      <div className="flex items-center justify-center ">
        <SectionTitle
          subHeading={"At a Glance!"}
          heading={"PAYMENT HISTORY?"}
        ></SectionTitle>
      </div>
      {/*-----------Item-----&--------Price-------*/}
      <div className="">
        <h3 className="text-xl md:text-3xl lg:text-3xl py-10">Total Payments: {payments.length}</h3>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr className="text-2xl font-bold bg-[#008080] text-white">
                <th>#</th>
                <th>Email</th>
                <th>Transaction Id</th>
                <th>Total Price</th>
                <th>Payment Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/*--------row--------1--------*/}
              {payments.map((payment, index) => (
                <tr key={payment._id}>
                  <th className="text-xl text-black">{index + 1}</th>
                  <td className="text-xl text-black">{payment.email}</td>
                  <td className="text-xl text-black">{payment.transactionId}</td>
                  <td className="text-xl text-black">$ {payment.price}</td>
                  <td className="text-xl text-black">$ {payment.status}</td>
                  <td>
                    {/* <button 
                    // onClick={() => handleDeleteUser(user)}
                    className="btn text-3xl text-white bg-[#ff004f] border-0 ">
                      <MdDeleteForever />
                    </button> */}
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

export default PaymentHistory;
