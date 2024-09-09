import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const ChefRecommends = () => {
  return (
    <div className="container m-auto py-10">
      <section>
        <SectionTitle
          subHeading={"Should Try"}
          heading={"CHEF RECOMMENDS"}
        ></SectionTitle>
      </section>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/*-----------Card-------1-----------*/}
        <div className="card bg-base-100shadow-xl border-2 border-yellow-600">
          <figure className="">
            <img
              src="https://i.ibb.co.com/JyjHDgT/drinks.jpg"
              alt="Shoes"
              className="w-full h-[300px] object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-2xl font-bold">Drinks</h2>
            <p className="text-xl py-2">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 mt-4 text-xl text-black hover:text-yellow-600 duration-100">Add to Cart</button>
            </div>
          </div>
        </div>
        {/*-----------Card-------2-----------*/}
        <div className="card bg-base-100shadow-xl border-2 border-yellow-600">
          <figure className="">
            <img
              src="https://i.ibb.co.com/cTQ3YRn/burger-1.jpg"
              alt="Shoes"
              className="w-full h-[300px] object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-2xl font-bold">Burger</h2>
            <p className="text-xl py-2">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 mt-4 text-xl text-black hover:text-yellow-600 duration-100">Add to Cart</button>
            </div>
          </div>
        </div>
        {/*-----------Card-------3-----------*/}
        <div className="card bg-base-100shadow-xl border-2 border-yellow-600">
          <figure className="">
            <img
              src="https://i.ibb.co.com/zsTkqYr/deesert-2.jpg"
              alt="Shoes"
              className="w-full h-[300px] object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-2xl font-bold">Dessert</h2>
            <p className="text-xl py-2">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 mt-4 text-xl text-black hover:text-yellow-600 duration-100">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommends;
