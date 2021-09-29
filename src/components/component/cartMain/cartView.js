
import classes from './cartMain.module.css'
import CartItemView from './cartItemView'
const CartView = (props)=>{

    return (
     <>
     <div className={classes.cartViewTitle}>
      <span>{props.item.title}</span>
     </div>
     <div className={classes.CartView}>
     {props.item.content.map((item)=>{
      return <CartItemView item={item} />
     })}
     </div>
     </>
    )

}

export default CartView