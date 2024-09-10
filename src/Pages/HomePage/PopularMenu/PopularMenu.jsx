import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Components/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <div className="container m-auto">
      <section>
        <SectionTitle
          subHeading={"Check it out"}
          heading={"FROM OUR MENU"}
        ></SectionTitle>
      </section>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 p-1">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex items-center justify-center mb-10">
        <button className="btn btn-outline border-0 border-b-4 mt-4 text-xl text-black">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
