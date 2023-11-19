import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../Hookes/useCart";

const NavBar = () => {
    const { user, Logout } = useContext(AuthContext)
    const [cart] = useCart()
    console.log(cart);
    const handleLogout = () => {
        Logout()
            .then(() => { })
            .catch(err => {
                console.error(err);
            })
    }
    const NavLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/menu'>Our Menu</NavLink></li>
        <li><NavLink to='/orders/Salads'>Orders</NavLink></li>
        <li><NavLink to='/secret'>Secret Recipe</NavLink></li>
        <li><Link to='/dashboard/cart'>
            <button className="btn mx-5 btn-primary">
                <FaShoppingCart className="mr-2" size={20}></FaShoppingCart>
                <div className="badge badge-secondary">+{cart.length}</div>
            </button></Link></li>
        {
            user ? <>
                <button onClick={handleLogout}>Log out</button></> : <><li><NavLink to='/login'>Login</NavLink></li></>
        }
    </>
    return (
        <div className="navbar fixed z-10 bg-black text-white bg-opacity-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavLinks}
                    </ul>
                </div>
                <div className="flex flex-col items-center">
                    <a className="btn btn-ghost font-cinzel text-xl uppercase">Bistro Boss</a>
                    <p className="font-cinzel">Restaurant</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <p>{user.displayName}</p> */}
                <button className="btn">button</button>
            </div>
        </div>
    );
};

export default NavBar;