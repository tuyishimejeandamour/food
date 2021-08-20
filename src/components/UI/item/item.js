
import classes from './item.module.css'
import image from '../../../assets/logo.png'
const Item = (props)=>{
    return(
        <div className={classes.itemContainer}>
            <div className={classes.imageContainer}>
                <div className={classes.image}>
                    <img src={image} alt="item" />
                </div>
            </div>
            <div className={classes.description}>
                <div className={classes.name}>
                   sushi
                </div>
                <div className={classes.itemdescription}>
                 jupanese sushi food 
                </div>
                <div className={classes.price}>
                  $10
                </div>
            </div>
            <div className={classes.action}>
                <button className={classes.actionButton}>+</button>
            </div>
        </div>
    )
}

export default Item