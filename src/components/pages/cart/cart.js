import Flex from "../../layout/flex/flexcontainer"
import MenuContainer from "../../layout/menuContainer/menuContainer"
import Table from "../../UI/table/table"
import Button from "../../UI/Button/Button"
import classes from './cart.module.css'
import CartMain from "../../component/cartMain/cartMain"
const Cart = ()=>{
  const title = 'your cart'
   return (
     <Flex className={classes.cart}>
       <Flex className={classes.content}>
         <div className={classes.cartheader}>
          <Button>order</Button>
         </div>
         <div className={classes.mainbody}>
           <CartMain />
         </div>
 
       </Flex>
       <Flex className={classes.menu}>
         <MenuContainer title={title}>
          <Table />
         </MenuContainer>
       </Flex>
     </Flex>
    )
}

export default Cart