import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="container m-auto">
      {/*----------Title---------*/}
      <div className="flex items-center justify-center">
        <SectionTitle
          subHeading={"What's new?"}
          heading={"ADD AN ITEM"}
        ></SectionTitle>
      </div>

      {/*---------From--------*/}
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-[#e9dede] p-10 rounded-xl">
          {/*----------Inpot-----1--------*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-black ">
                Recipe name*
              </span>
            </label>
            <input
              type="text"
              {...register("name")}
              placeholder="Recipe..."
              className="input input-bordered bg-slate-50 text-black text-xl"
            />
          </div>

          <div className="grid gap-4 lg:grid-cols-2 mt-5">
            {/*----------Inpot-----2--------*/}
            <div className="form-control">
              <label className="form-control w-full ">
                <span className="label-text text-xl text-black">Category</span>
                <select
                  {...register("category")}
                  className="select bg-slate-100 text-xl text-slate-500 w-full"
                >
                  <option value="dessert">Dessert</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="salad">Salad</option>
                  <option value="drink">Drink</option>
                  <option value="offerd">Offerd</option>
                </select>
              </label>
            </div>
            {/*----------Inpot-----3--------*/}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl text-black">Price*</span>
              </label>
              <input
                type="number"
                {...register("price")}
                placeholder="Price...."
                className="input input-bordered bg-slate-50 text-black text-xl"
              />
            </div>
          </div>

          {/*----------Textariea-----4--------*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-black ">
              Recipe Details*
              </span>
            </label>
            <textarea
              type="text"
              {...register("details")}
              placeholder="Recipe Details..."
              className="input input-bordered bg-slate-50 w-full h-40 p-4 text-black text-xl"
            />
          </div>
          {/*----------Textariea-----5--------*/}
          <div className="form-control py-3">
            <label className="label">
              <span className="label-text text-xl text-black ">
              Choose image*
              </span>
            </label>
            <input 
            type="file"
            {...register("image")}
            className="file-input block w-full text-xl text-gray-900 p-2 rounded-lg dark:text-gray-400 dark:bg-gray-700 dark:placeholder-gray-400"/>
          </div>

          <input type="submit" className="btn border-0 text-xl text-white bg-[#008080] mt-4 "/>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
