
import classes from './item.module.css'
import image from '../../../assets/logo.png'
import {useHistory} from 'react-router-dom'
const Item = (props)=>{
    const history = useHistory();
    return(
        <div className={classes.itemContainer}>
            <div className={classes.imageContainer}>
                <div className={classes.image} onClick={()=>history.push(`/product/${1}`)}>
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
                  <span className={classes.discount}>$10</span>
                  <span>$8</span>
                </div>
            </div>
            <div className={classes.action}>
                <button className={classes.actionButton}>+</button>
            </div>
        </div>
    )
}

export default Item