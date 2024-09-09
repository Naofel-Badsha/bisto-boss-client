import { Helmet } from "react-helmet-async";
import Cover from "../../../shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertsMenu from "../../../assets/menu/deser-3.jpg";
import pizzaMenu from "../../../assets/menu/pizza-2.jpg";
import pizzaSalade from "../../../assets/menu/salad-2.jpg";
import pizzaSoups from "../../../assets/menu/suff-1.webp";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCatagory from "../MenuCatagory/MenuCatagory";

const OurMenu = () => {
  const [menu] = useMenu();
  const offerd = menu.filter((item) => item.category === "offerd");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro || Menu</title>
      </Helmet>
      {/*----------Menu-----1-------*/}
      <Cover img={menuImg} title={"Our Menu"}></Cover>
      {/*---------------Section--------Title-------*/}
      <section>
        <SectionTitle
          subHeading={"Don't Miss"}
          heading={"TODAY'S OFFER"}
        ></SectionTitle>
      </section>
      <MenuCatagory items={offerd}></MenuCatagory>


      {/*----------Desserts-----2-------*/}
      <Cover img={dessertsMenu} title={"Our Desserts"}></Cover>
      <MenuCatagory items={dessert}></MenuCatagory>


      {/*----------Pizza-----3-------*/}
      <Cover img={pizzaMenu} title={"Our Pizza"}></Cover>
      <MenuCatagory items={pizza}></MenuCatagory>

      {/*----------Salade-----4-------*/}
      <Cover img={pizzaSalade} title={"Our Salades"}></Cover>
      <MenuCatagory items={salad}></MenuCatagory>

      {/*----------Salade-----5-------*/}
      <Cover img={pizzaSoups} title={"Our Soups"}></Cover>
      <MenuCatagory items={soup}></MenuCatagory>
    </div>
  );
};

export default OurMenu;
