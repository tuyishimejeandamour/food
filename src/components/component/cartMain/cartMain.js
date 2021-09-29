
import classes from './cartMain.module.css'
import List from '../../UI/list/list'
import { NavLink,useRouteMatch } from 'react-router-dom'
import CartView from './cartView'

const CartMain = ()=>{
    const foods = [
      {
        title:'souce',
        content:[
            {
              name:"sushi",
              disc:'src\\components\\layout\\MainHeader\\Navigation.js Line 10:9:  onmodleover is assigned a value but never used  no-unused-vars',
              price:12,
              amount:4,
              discounted:10
            },
            {
              name:"muchuzi mix",
              disc:'Search for the keywords to learn more about each warning.',
              price:12,
              amount:4,
              discounted:10
            }
        ]
      },
      {
        title:'meat',
        content:[
            {
              name:"sushi",
              disc:'src\\components\\layout\\MainHeader\\Navigation.js Line 10:9:  onmodleover is assigned a value but never used  no-unused-vars',
              price:12,
              amount:4,
              discounted:10
            },
            {
              name:"sushi",
              disc:'src\\components\\layout\\MainHeader\\Navigation.js Line 10:9:  onmodleover is assigned a value but never used  no-unused-vars',
              price:12,
              amount:4,
              discounted:10
            },
            {
              name:"sushi",
              disc:'src\\components\\layout\\MainHeader\\Navigation.js Line 10:9:  onmodleover is assigned a value but never used  no-unused-vars',
              price:12,
              amount:4,
              discounted:10
            }
            ,
            {
              name:"sushi",
              disc:'src\\components\\layout\\MainHeader\\Navigation.js Line 10:9:  onmodleover is assigned a value but never used  no-unused-vars',
              price:12,
              amount:4,
              discounted:10
            }
        ]
      }
    ]
    const rout = useRouteMatch()
    return(
    <>
     <div className={classes.cartMain}>
        
      {foods.map((food)=>{
        return <CartView item={food} />
      })}

     </div>

     <div className={classes.suggest}>
      <p>you can also</p>
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
     </>
    )
}

export default CartMain