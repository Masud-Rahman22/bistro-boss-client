import { Link } from "react-router-dom";
import Cover from "../../../../Cover/Cover";
import MenuCards from "../../../../Layout/Home/Home/MenuCards";


const MenuCategory = ({items,title,img,caption}) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title} caption={caption} ></Cover>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-4/5 mx-auto my-16">
                {
                    items?.map(menu => <MenuCards key={menu._id} menu={menu}></MenuCards>)
                }
            </div>
            <div className="flex items-center justify-center">
            <Link to={`/orders/${title}`}><button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;