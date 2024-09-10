import { Helmet } from "react-helmet-async";
import Cover from "../../../shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import offerdImg from "../../../assets/menu/offerd.jpg";
import dessertsMenu from "../../../assets/menu/deser-3.jpg";
import pizzaMenu from "../../../assets/menu/pizza-2.jpg";
import saladeMenu from "../../../assets/menu/salad-2.jpg";
import soupMenu from "../../../assets/menu/suff-1.webp";
import drinkMenu from "../../../assets/menu/drinks.jpg";
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
  const drink = menu.filter((item) => item.category === "drink");

  return (
    <div>
      <Helmet>
        <title>Bistro || Menu</title>
      </Helmet>
      {/*----------Menu-----1-------*/}
      <Cover img={menuImg} items={offerd} title={"Our All Menu"}></Cover>
      {/*---------------Section--------Title-------*/}
      <section><SectionTitle subHeading={"Don't Miss"}heading={"TODAY'S OFFER"}></SectionTitle></section>
      
      <MenuCatagory items={offerd} title={"offerd"} img={offerdImg}></MenuCatagory>

      
      {/*----------Desserts-----2-------*/}
      <MenuCatagory items={dessert} title={"dessert"} img={dessertsMenu}></MenuCatagory>
      {/*----------Pizza-----3-------*/}
      <MenuCatagory items={pizza} title={"pizza"} img={pizzaMenu}></MenuCatagory>
      {/*----------Salade-----4-------*/}
      <MenuCatagory items={salad} title={"salad"} img={saladeMenu}></MenuCatagory>
      {/*----------Salade-----5-------*/}
      <MenuCatagory items={soup} title={"soup"} img={soupMenu}></MenuCatagory>
      {/*----------Salade-----6-------*/}
      <MenuCatagory items={drink} title={"drink"} img={drinkMenu}></MenuCatagory>
    </div>
  );
};

export default OurMenu;
