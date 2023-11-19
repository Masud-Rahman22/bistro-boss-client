import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import useMenu from "../../../Hookes/useMenu";


const ManageItems = () => {
    const [menus] = useMenu();
    const handleToDeleteItem = item => {
        console.log(item);
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
                                    <button className="btn bg-yellow-600 btn-md"><FaEdit className="text-white text-xl"></FaEdit></button>
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