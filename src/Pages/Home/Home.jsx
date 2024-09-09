import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Catagory from "../HomePage/Catagory/Catagory";
import PopularMenu from "../HomePage/PopularMenu/PopularMenu";
import Testimonials from "../HomePage/Testimonils/Testimonials";
import Feature from "./../HomePage/Feature/Feature";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bristo Boss || Home</title>
      </Helmet>
      <Banner></Banner>
      <Catagory></Catagory>
      <PopularMenu></PopularMenu>
      <Feature></Feature>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
