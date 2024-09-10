const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;

  return (
    <div>
      <div className="card shadow-xl border-2 border-[#008080] h-full">
        <div className="h-[300px] w-full">
          <img src={image} className="object-cover h-[300px] w-full rounded-t-[15px]" />
        </div>
        <p className="absolute right-0 mr-4 mt-4 text-[20px] font-bold bg-[#008080] rounded-md px-4 text-white">
          $:{price}
        </p>
        <div className="card-body items-center justify-center text-center">
          <h2 className="card-title text-[#008080]">{name}</h2>
          <p className="text-xl py-2">{recipe}?</p>
          <div className="card-actions">
            <button className="btn hover:text-white bg-slate-200 duration-100 text-black text-xl border-0 border-b-4 border-orange-400">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
