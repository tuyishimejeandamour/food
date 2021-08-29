
import List from "../../UI/list/list"
import { NavLink, useRouteMatch } from "react-router-dom"
import classes from './menulist.module.css'
const MenuList = ()=>{
    const rout = useRouteMatch()
    return(
        <div className={classes.menucontent}>
            <div className={classes.menulist}>
        <List>
        <NavLink className={classes.nava} to={`${rout.path}/soup`}>
        <div className={classes.name}>
          <span>-</span>
          soup
        </div>
        </NavLink>
      </List>
      <List>
        <div className={classes.name}>
          <span>-</span>
          drinks
        </div>
      </List>
      <List>
        <div className={classes.name}>
          <span>-</span>
          meats
        </div>
      </List>
      <List>
        <div className={classes.name}>
          <span>-</span>
          japanese food
        </div>
      </List>
      <List>
        <div className={classes.name}>
          <span>-</span>
          name
        </div>
      </List>
      </div>
      <div className={classes.creates}>
      <List>
        <NavLink className={classes.nava} to={`${rout.path}/soup`}>
        <div className={classes.name}>
          <span>◻</span>
          prepare plate
        </div>
        </NavLink>
      </List>
      <List>
        <NavLink className={classes.nava} to={`${rout.path}/soup`}>
        <div className={classes.name}>
          <span>◻</span>
          prepare table
        </div>
        </NavLink>
      </List>
      <List>
        <NavLink className={classes.nava} to={`${rout.path}/soup`}>
        <div className={classes.name}>
          <span>◻</span>
          order for party
        </div>
        </NavLink>
      </List>
      </div>
      </div>
    )
}


export default MenuList