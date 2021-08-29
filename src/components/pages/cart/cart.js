import Flex from "../../layout/flex/flexcontainer"
import MenuContainer from "../../layout/menuContainer/menuContainer"
import Table from "../../UI/table/table"
import classes from './cart.module.css'
const Cart = ()=>{
  const title = 'your cart'
   return (
     <Flex className={classes.cart}>
       <Flex className={classes.content}>
         
 
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