import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import useMenu from "../../../Hookes/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hookes/useAxiosSecure";
import { Link } from "react-router-dom";


const ManageItems = () => {
    const [menus, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();
    const handleToDeleteItem = item => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            }

        });
    }
    return (
        <div>
            <SharedTitle heading="Hurry up" subHeading="MANAGE ITEMS"></SharedTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Item image</th>
                            <th>Item name</th>
                            <th>Item price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menus?.map((menu, i) => <tr key={menu._id}>
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={menu.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {menu.name}
                                </td>
                                <td>{menu.price}</td>
                                <td>
                                    <Link to={`/dashboard/updateItem/${menu._id}`}>
                                        <button className="btn bg-yellow-600 btn-md"><FaEdit className="text-white text-xl"></FaEdit></button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleToDeleteItem(menu)} className="btn btn-ghost btn-lg text-red-600"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;