import Flex from '../../layout/flex/flexcontainer';
import LoginComponent from '../../component/loginForm/login';
import classes from './Register.module.css'
const LoginPage = (props) => {
  const loginHandler = ()=>{
    props.onLogin()
  }
  return (
    <Flex columnReverse="column-reverse">
      <Flex flex='1' className={classes.logindiv}  ></Flex>
      <Flex width="40%" className={classes.logindiv}>
      <LoginComponent onLogin={loginHandler} />
    </Flex>
    </Flex>
  );
};

export default LoginPage;
