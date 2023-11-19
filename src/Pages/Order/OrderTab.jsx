import FoodCard from "../../Components/FoodCard/FoodCard";


const OrderTab = ({item}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:ml-20">
            {
                item?.map(menu => <FoodCard key={menu._id} menu={menu}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;