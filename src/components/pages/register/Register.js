import RegisterComponent from '../../component/registerForm/register';
import Flex from '../../layout/flex/flexcontainer';
import classes from './Register.module.css'
const RegisterPage = (props) => {
  const loginHandler = ()=>{
    props.onLogin()
  }
  return (
    <Flex className={classes.register}>
      <RegisterComponent onLogin={loginHandler} />
    </Flex>
  );
};

export default RegisterPage;
