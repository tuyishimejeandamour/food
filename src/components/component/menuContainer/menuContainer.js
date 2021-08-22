import classes from './menuContainer.module.css'
import Flex from '../../layout/flex/flexcontainer'
import pathcon from '../../../assets/menupath.png'
import { useHistory } from 'react-router-dom'
const MenuContainer = (props)=>{
     const history = useHistory()
     console.log(history)
    return(
        <div className={classes.menuContainer}>
        <img className={classes.imagepath} src={pathcon} alt="path" />
        <header className={classes.title}>
        {props.showButtons &&
        <button  onClick={()=>history.goBack()}>{"< back"}</button>
          }
        <Flex className={classes.titleflex}> 
            {props.title}
        </Flex>
        {props.showButtons &&
        <button>menu</button>
        }
        </header>
        <div className={classes.main}>
            {props.children}
        </div>
        </div>
    )
}

export default MenuContainer