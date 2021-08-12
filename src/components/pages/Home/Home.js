import React from 'react';
import Flex from '../../layout/flex/flexcontainer';
import LoginPage from '../Login/Login';

const Home = (props) => {
  return (
    <Flex>
      <LoginPage onLogin={()=>props.onLogin()} />
    </Flex>
  );
};

export default Home;
