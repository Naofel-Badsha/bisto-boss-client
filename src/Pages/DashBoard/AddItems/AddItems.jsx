import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_Image_Hosting_key
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure()
  const onSubmit = async (data) =>{
    console.log(data);
    //----image upload to imagebb and get then an url
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type' : 'multipart/form-data'
      }
    })
    if(res.data.success){
     //----now send the menu item data to the servrt width the image url
     const menuItem = {
      name: data.name,
      category: data.category,
      price: parseFloat(data.price),
      recipe: data.recipe,
      image: res.data.data.display_url
     }
    //------------
    const menuRes = await axiosSecure.post('/menu', menuItem)
    console.log(menuRes.data)
    //--------------
    if(menuRes.data.insertedId){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Added memu seccessfull",
        showConfirmButton: false,
        timer: 1500
      });
    }

  }
    console.log('with image url', res.data)
  }




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
              {...register("recipe")}
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
          <input type="file"
          {...register("image")}
           className="file-input bg-slate-300 file-input-bordered w-full max-w-xs" />
          </div>
    
          <button className="btn border-0 text-xl text-white bg-[#008080] mt-4 ">submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
