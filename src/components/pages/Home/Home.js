import React from 'react';
import { Route, useRouteMatch,NavLink } from 'react-router-dom';
import Flex from '../../layout/flex/flexcontainer';
import MenuContainer from '../../component/menuContainer/menuContainer';
import Item from '../../UI/item/item';
import List from '../../UI/list/list';
import FoodStories from '../../component/foodStories/foodStories';
import SelectedMenu from '../../component/selectedMenu/selectedMenu';
import classes from './Home.module.css'
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
          <List>
            <NavLink className={classes.nava} to={`${rout.path}/soup`}>
            <div className={classes.name}>
              <span>-</span>
              soup
            </div>
            </NavLink>
          </List>
          <List>
            <div className={classes.name}>
              <span>-</span>
              drinks
            </div>
          </List>
          <List>
            <div className={classes.name}>
              <span>-</span>
              meats
            </div>
          </List>
          <List>
            <div className={classes.name}>
              <span>-</span>
              japanese food
            </div>
          </List>
          <List>
            <div className={classes.name}>
              <span>-</span>
              name
            </div>
          </List>
          </Route>
          <Route path={`${rout.path}/:menuItem`}>
          <div className={classes.foodstories}>
          <SelectedMenu />
        </div>
          </Route>
        </MenuContainer>
      </Flex>
    </Flex>
  );
};

export default Home;
