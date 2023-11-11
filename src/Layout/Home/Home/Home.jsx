import Banner from "./Banner";
import Catgeory from "./Catgeory";
import Featured from "./Featured/Featured";
import Footer from "./Footer";
import PopularMenu from "./PopularMenu";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catgeory></Catgeory>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;