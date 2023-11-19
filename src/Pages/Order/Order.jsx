import { useState } from "react";
import Cover from "../../Cover/Cover";
import coverImg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hookes/useMenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ['Salads', 'Pizza', 'Soup', 'Dessert', 'Drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabs, setTabs] = useState(initialIndex)
    const [menus] = useMenu()
    console.log(category);
    const dessert = menus?.filter(item => item.category === 'dessert')
    const soup = menus?.filter(item => item.category === 'soup')
    const salad = menus?.filter(item => item.category === 'salad')
    const pizza = menus?.filter(item => item.category === 'pizza')
    const drinks = menus?.filter(item => item.category === 'drinks')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Orders</title>
            </Helmet>
            <Cover img={coverImg} title={'OUR SHOP'} caption={'WOULD YOU LIKE TO TRY OUR DISH?'}></Cover>
            <Tabs selectedIndex={tabs} onSelect={(index) => setTabs(index)}>
                <TabList className="flex items-center justify-center my-20">
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab item={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab item={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab item={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab item={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab item={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;