import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Catagory from "../HomePage/Catagory/Catagory";
import PopularMenu from "../HomePage/PopularMenu/PopularMenu";
import ChefRecommends from "../HomePage/ChefRecommends/ChefRecommends";
import Testimonials from "../HomePage/Testimonils/Testimonials";
import Feature from "./../HomePage/Feature/Feature";
import ContactNumber from "../HomePage/ContactNumber/ContactNumber";
import ChefServices from "../HomePage/ChefServices/ChefServices";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bristo Boss || Home</title>
      </Helmet>
      <Banner></Banner>
      <Catagory></Catagory>
      <ChefServices></ChefServices>
      <PopularMenu></PopularMenu>
      <ContactNumber></ContactNumber>
      <ChefRecommends></ChefRecommends>
      <Feature></Feature>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
