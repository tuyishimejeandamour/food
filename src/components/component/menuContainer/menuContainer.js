import classes from './menuContainer.module.css'
import Flex from '../../layout/flex/flexcontainer'
import pathcon from '../../../assets/menupath.png'
const MenuContainer = (props)=>{
    return(
        <div className={classes.menuContainer}>
        <img className={classes.imagepath} src={pathcon} alt="path" />
        <header className={classes.title}>
        <Flex className={classes.titleflex}> 
            people like this
        </Flex>
        </header>
        <div className={classes.main}>
            {props.children}
        </div>
        </div>
    )
}

export default MenuContainer