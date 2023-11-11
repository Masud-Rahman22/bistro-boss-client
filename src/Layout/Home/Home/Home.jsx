import Banner from "./Banner";
import Catgeory from "./Catgeory";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catgeory></Catgeory>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;