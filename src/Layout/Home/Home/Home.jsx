import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Catgeory from "./Catgeory";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Catgeory></Catgeory>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;