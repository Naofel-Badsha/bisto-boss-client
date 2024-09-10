import { Link } from "react-router-dom";
import MenuItem from "../../../Components/MenuItem/MenuItem";
import Cover from "../../../shared/Cover/Cover";

const MenuCatagory = ({items, img, title }) => {
  return (
      <div className="container m-auto py-6">
        {title && <Cover img={img} title={title}></Cover>}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 py-10">
          {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <Link to={`/orderFood/${title}`}>
        <div className="flex items-center justify-center">
          <button className="btn btn-outline border-0 border-b-4 mt-4 text-xl text-black">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
        </Link>
      </div>
  );
};

export default MenuCatagory;
