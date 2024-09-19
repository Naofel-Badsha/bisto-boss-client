import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  return (
    <div>
      {/*----------Title---------*/}
      <div className="flex items-center justify-center">
        <SectionTitle
          subHeading={"At a Glance!"}
          heading={"PAYMENT HISTORY?"}
        ></SectionTitle>
      </div>
      {/*-----------Item-----&--------Price-------*/}
      <div className="">
        <h3 className="text-xl md:text-3xl lg:text-3xl">Total Payments: 6</h3>
      </div>
    </div>
  );
};

export default PaymentHistory;
