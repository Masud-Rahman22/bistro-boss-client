import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaPaypal, FaShoppingCart, FaSignLanguage, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hookes/useCart";
import useAdmin from "../Hookes/useAdmin";


const Dashboard = () => {
    const [cart] = useCart()
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu space-y-4 p-4">
                    {
                        isAdmin ? <>
                            <li><NavLink to='/'>
                                <FaHome></FaHome>
                                Admin Home
                            </NavLink>
                            </li>
                            <li><NavLink to='/dashboard/addItems'>
                                <FaUtensils></FaUtensils>
                                Add Items
                            </NavLink>
                            </li>
                            <li><NavLink to='/dashboard/manageItems'>
                                <FaList></FaList>
                                Manage Items
                            </NavLink>
                            </li>
                            <li><NavLink to='/dashboard/manageBookings'>
                                <FaBook></FaBook>
                                Manage Bookings
                            </NavLink>
                            </li>
                            <li><NavLink to='/dashboard/allUsers'>
                                <FaUsers></FaUsers>
                                All Users
                            </NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to='/dashboard/cart'>
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart ({cart.length})
                                    </NavLink>
                                </li>
                                <li><NavLink>
                                    <FaHome></FaHome>
                                    User Home
                                </NavLink>
                                </li>
                                <li><NavLink>
                                    <FaCalendar></FaCalendar>
                                    Reservation
                                </NavLink>
                                </li>
                                <li><NavLink>
                                    <FaPaypal></FaPaypal>
                                    Payment History
                                </NavLink>
                                </li>
                                <li><NavLink>
                                    <FaAd></FaAd>
                                    Add Review
                                </NavLink>
                                </li>
                                <li><NavLink>
                                    <FaPaypal></FaPaypal>
                                    Payment History
                                </NavLink>
                                </li>
                                <li><NavLink>
                                    <FaBook></FaBook>
                                    My Booking
                                </NavLink>
                                </li>
                            </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to='/'>
                        <FaHome></FaHome>
                        Home
                    </NavLink>
                    </li>
                    <li><NavLink to='/menu'>
                        <FaList></FaList>
                        Menu
                    </NavLink>
                    </li>
                    <li><NavLink to='/orders'>
                        <FaShoppingCart></FaShoppingCart>
                        Shop
                    </NavLink>
                    </li>
                    <li><NavLink to='/'>
                        <FaSignLanguage></FaSignLanguage>
                        Contact
                    </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;