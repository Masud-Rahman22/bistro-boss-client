
import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import MenuCards from "./MenuCards";
import useMenu from "../../../Hookes/useMenu";


const PopularMenu = () => {
    const [menus] = useMenu();
    const popular = menus?.filter(item => item.category === 'popular')
    console.log(menus);
    return (
        <div className="mb-10">
            <SharedTitle heading={'---Check it out---'} subHeading={'FROM OUR MENU'}></SharedTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-4/5 mx-auto">
            {
                popular?.map(menu => <MenuCards key = {menu._id} menu={menu}></MenuCards>)
            }
            </div>
        </div>
    );
};

export default PopularMenu;