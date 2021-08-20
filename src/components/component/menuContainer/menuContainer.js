import classes from './menuContainer.module.css'
import Flex from '../../layout/flex/flexcontainer'
const MenuContainer = (props)=>{
    return(
        <div className={classes.menuContainer}>
        <header className={classes.title}>
        <Flex className={classes.titleflex}> 
            header
        </Flex>
        </header>
        <div className={classes.main}>
            {props.children}
        </div>
        </div>
    )
}

export default MenuContainer