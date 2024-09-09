import MenuItem from "../../../Components/MenuItem/MenuItem";

const MenuCatagory = ({ items }) => {
  return (
      <div className="container m-auto py-20 ">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="flex items-center justify-center mt-5">
          <button className="btn btn-outline border-0 border-b-4 mt-4 text-xl text-black">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </div>
  );
};

export default MenuCatagory;
