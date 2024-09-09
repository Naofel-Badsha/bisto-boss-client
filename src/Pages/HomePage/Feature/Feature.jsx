import SectionTitle from "./../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Feature.css'
const Feature = () => {
  return (
    <div className="featured-item mt-10 container m-auto">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"Feature Item"}
      ></SectionTitle>
      <div className="md:flex gap-8 justify-center items-center bg-slate-700 bg-opacity-40 py-20 px-16">
        <div>
            <img src={featuredImg} />
        </div>
        <div className="">
            <p className="font-bold text-xl text-white">Aug 20, 2035</p>
            <p className="font-bold text-xl text-white"> WHERE CAN I GET SOME?</p>
            <p className="font-bold text-lg text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. 
                Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                </p>
                <button className="btn btn-outline border-0 border-b-4 mt-4 text-xl text-black hover:text-yellow-600 duration-100">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
