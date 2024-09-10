import FoodCard from "../../../Components/FoodCard/FoodCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";

const ChefRecommends = () => {
  const [menu] = useMenu();
  const offerd = menu.filter(item => item.category === "offerd")

  return (
    <div className="container m-auto py-10">
      <section>
        <SectionTitle
          subHeading={"Should Try"}
          heading={"CHEF RECOMMENDS"}
        ></SectionTitle>
      </section>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {
          offerd.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
        }
      </div>
    </div>
  );
};

export default ChefRecommends;
