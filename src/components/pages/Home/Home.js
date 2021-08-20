import React from 'react';
import Flex from '../../layout/flex/flexcontainer';
import MenuContainer from '../../component/menuContainer/menuContainer';
import Item from '../../UI/item/item';
import classes from './Home.module.css'
import List from '../../UI/list/list';
const Home = (props) => {
  return (
    <Flex className={classes.home}>
      <button className={classes.menuHider}>
        =
      </button>
      <Flex className={classes.content}>
        <div className={classes.foodstories}>

        </div>
        <div className={classes.somefoods}>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </div>

      </Flex>
      <Flex className={classes.menu}>
        <MenuContainer>
          <List>
            <div className={classes.name}>
              <span>-</span>
              soup
            </div>
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
        </MenuContainer>
      </Flex>
    </Flex>
  );
};

export default Home;
