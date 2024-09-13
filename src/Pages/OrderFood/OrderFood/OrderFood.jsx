import Cover from "../../../shared/Cover/Cover";
import shopPage from "../../../assets/order/order1.jpg";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const OrderFood = () => {
  //-----------Category-------Tab----Selected------ 
  const categories = ['dessert', 'pizza', 'soup', 'salad', 'drink', 'offerd']
  const {category} = useParams();
  const initialIndex = categories.indexOf(category);
  console.log(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const drink = menu.filter((item) => item.category === "drink");
  const offerd = menu.filter((item) => item.category === "offerd");

  return (
    <div>
      <Cover img={shopPage} title="Order Food"></Cover>

      <div className="container m-auto">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "50px",
            }}
          >  
            <Tab>dessert</Tab>
            <Tab>pizza</Tab>
            <Tab>soup</Tab>
            <Tab>salad</Tab>
            <Tab>drink</Tab>
            <Tab>offerd</Tab>
          </TabList>
          {/*---------------Desserts-----------------*/}
          <TabPanel>
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          {/*---------------Pizza-----------------*/}
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          {/*--------------Soups------------------*/}
          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          {/*--------------Salad------------------*/}
          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          {/*--------------Drinks------------------*/}
          <TabPanel>
            <OrderTab items={drink}></OrderTab>
          </TabPanel>
          {/*--------------Offerd------------------*/}
          <TabPanel>
            <OrderTab items={offerd}></OrderTab>
          </TabPanel>
          {/*--------------------------------*/}
        </Tabs>
      </div>
    </div>
  );
};

export default OrderFood;
