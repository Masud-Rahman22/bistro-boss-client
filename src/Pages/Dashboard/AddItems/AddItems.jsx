import { useForm } from "react-hook-form";
import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hookes/useAxiosPublic";
import useAxiosSecure from "../../../Hookes/useAxiosSecure";
import Swal from "sweetalert2";

const imageKey = import.meta.env.VITE_IMAGE_HOSTING_KEY
const imageApi = `https://api.imgbb.com/1/upload?key=${imageKey}`
const AddItems = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(imageApi, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log(res.data);
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                category: data.category,
                price: parseFloat(data.price),
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem)
            if (menuRes.data.insertedId) {
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }
    return (
        <>
            <div>
                <SharedTitle heading={"What's new?"} subHeading={'ADD AN ITEM'}></SharedTitle>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-slate-200 p-10">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input {...register('name')} type="text" placeholder="Recipe Name" className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select {...register("category")}
                                className="select select-ghost w-full  bg-white" defaultValue='default'>
                                <option disabled value='default'>Select Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="desserts">Desserts</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input {...register('price')} type="text" placeholder="Price" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>
                    <input {...register('image')} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    <button className="btn flex bg-[#835D23] text-white px-10 my-5">Add <FaUtensils></FaUtensils></button>
                </form>
            </div></>
    );
};

export default AddItems;