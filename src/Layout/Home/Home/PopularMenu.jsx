import { useEffect, useState } from "react";
import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import MenuCards from "./MenuCards";


const PopularMenu = () => {
    const [menus,setMenu] = useState([])
    useEffect(()=>{
        fetch('/menu.json')
        .then(res => res.json())
        .then(data =>{
            const popularItems = data.filter(item=> item.category === 'popular')
            setMenu(popularItems)
        })
    },[])
    console.log(menus);
    return (
        <div className="mb-10">
            <SharedTitle heading={'---Check it out---'} subHeading={'FROM OUR MENU'}></SharedTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-4/5 mx-auto">
            {
                menus?.map(menu => <MenuCards key = {menu._id} menu={menu}></MenuCards>)
            }
            </div>
        </div>
    );
};

export default PopularMenu;