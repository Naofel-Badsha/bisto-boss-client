import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
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
    </div>
  );
};

export default AdminHome;
