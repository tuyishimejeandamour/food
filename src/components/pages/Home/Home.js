import React from 'react';
import Flex from '../../layout/flex/flexcontainer';
import Composition from '../../component/composition/composition';
import ListITems from '../../component/listItems/listItems';
import MenuContainer from '../../component/menuContainer/menuContainer';
import Item from '../../UI/item/item';
const Home = (props) => {
  return (
    <Flex>
      <Flex>
        <MenuContainer>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </MenuContainer>
      </Flex>
      <Flex>

      </Flex>
      <Flex>
        <Composition>
          <ListITems></ListITems>
        </Composition>
      </Flex>
    </Flex>
  );
};

export default Home;
