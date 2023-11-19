import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from '../Home/Home/Footer'
const Main = () => {
    const location = useLocation();
    console.log(location);
    const loginLocation = location.pathname.includes('login') || location.pathname.includes('signUp')
    // console.log(loginLocation);
    // const SignUpLocation = location.pathname.includes('signUp')
    // console.log(SignUpLocation);
    return (
        <div>
            {loginLocation || <NavBar></NavBar>}
            {/* {SignUpLocation || <NavBar></NavBar>} */}
            <Outlet></Outlet>
            {loginLocation || <Footer></Footer>}
            {/* {SignUpLocation || <Footer></Footer>} */}
        </div>
    );
};

export default Main;