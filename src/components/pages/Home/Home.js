import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import Flex from '../../layout/flex/flexcontainer';
import MenuContainer from '../../layout/menuContainer/menuContainer';
import Item from '../../UI/item/item';
import FoodStories from '../../component/foodStories/foodStories';
import SelectedMenu from '../../component/selectedMenu/selectedMenu';
import classes from './Home.module.css'
import MenuList from '../../component/menuList/menulist';
const Home = (props) => {
   const rout = useRouteMatch()
   let showButto = false;
   let title = "menu";
   if(!rout.isExact){
     showButto = true
     title = "soup"
   }
  return (
    <Flex className={classes.home}>
      <button className={classes.menuHider}>
        =
      </button>
      <Flex className={classes.content}>
        <div className={classes.foodstories}>
         <FoodStories></FoodStories>
        </div>
        <div className={classes.somefoods}>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </div>

      </Flex>
      <Flex className={classes.menu}>
        <MenuContainer title={title} showButtons={showButto}>
          <Route path={`${rout.path}`} exact>
            <MenuList />
          </Route>
          <Route path={`${rout.path}/:menuItem`}>
          <div className={classes.foodseleceted}>
          <SelectedMenu />
        </div>
          </Route>
        </MenuContainer>
      </Flex>
    </Flex>
  );
};

export default Home;
