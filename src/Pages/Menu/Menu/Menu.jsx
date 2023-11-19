import { Helmet } from 'react-helmet-async';
import Cover from '../../../Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import useMenu from '../../../Hookes/useMenu';
import SharedTitle from '../../../Components/SharedTitle/SharedTitle';
import MenuCategory from './MenuCategory/MenuCategory';
// import PopularMenu from '../../../Layout/Home/Home/PopularMenu';
const Menu = () => {
    const [menus] = useMenu()
    const dessert = menus?.filter(item => item.category === 'dessert')
    const soup = menus?.filter(item => item.category === 'soup')
    const salad = menus?.filter(item => item.category === 'salad')
    const pizza = menus?.filter(item => item.category === 'pizza')
    const offered = menus?.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover title={'OUR MENU'} img={menuImg} caption={'Would you like to try a dish?'}></Cover>
            <SharedTitle heading="Today's Offer" subHeading="Don't miss"></SharedTitle>
            <MenuCategory items={offered}></MenuCategory>
            {/* for dessert */}
            <MenuCategory items={dessert} title={'Dessert'} img={dessertImg} caption={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>
            {/* for soup */}
            <MenuCategory items={soup} title={'Soup'} img={soupImg} caption={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>
            {/* for salad */}
            <MenuCategory items={salad} title={'Salads'} img={saladImg} caption={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>
            {/* for pizza */}
            <MenuCategory items={pizza} title={'Pizza'} img={pizzaImg} caption={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>
        </div>
    );
};

export default Menu;