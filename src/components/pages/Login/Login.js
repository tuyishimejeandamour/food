import Flex from '../../layout/flex/flexcontainer';
import LoginComponent from '../../component/loginForm/login';

const LoginPage = (props) => {
  const loginHandler = ()=>{
    props.onLogin()
  }
  return (
    <Flex>
      <Flex flex='1'></Flex>
      <Flex width="40%">
      <LoginComponent onLogin={loginHandler} />
    </Flex>
    </Flex>
  );
};

export default LoginPage;
