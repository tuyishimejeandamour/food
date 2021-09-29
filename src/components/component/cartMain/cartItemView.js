
import classes from './cartMain.module.css'
import Item from '../../UI/item/item'
const CartItemView = (props) => {

    return (
        <div className={classes.cartItemView}>
            <div className={classes.Item}>
                <Item></Item>
            </div>
            <div className={classes.disc}>

                <div className={classes.itemAmount}>
                    amount:4
                </div>
                <div className={classes.itemPrice}>
                    price:$12
                </div>
                <div className={classes.totalPrice}>
                    total:$48
                </div>
            </div>
        </div>
    )
}


export default CartItemView