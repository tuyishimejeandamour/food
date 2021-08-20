import React from 'react';
import Flex from '../../layout/flex/flexcontainer';
import Composition from '../../component/composition/composition';
import ListITems from '../../component/listItems/listItems';

const Home = (props) => {
  return (
    <Flex>
      <Flex> 
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
