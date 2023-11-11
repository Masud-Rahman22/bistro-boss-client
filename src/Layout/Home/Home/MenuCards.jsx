

const MenuCards = ({ menu }) => {
    const { image, name, recipe, price } = menu;
    return (
        <div className="flex space-x-4 items-center">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px] rounded-fu" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-[#D99904]">${price}</p>
        </div>
    );
};

export default MenuCards;