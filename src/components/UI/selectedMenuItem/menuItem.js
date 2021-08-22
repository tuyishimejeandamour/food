
import classes from './menuItem.module.css'
import image from '../../../assets/plate.jpg'
const MenuItem= (props)=>{
    return(
        <div className={classes.menuItem}>
            <div className={classes.title}>
                menu
            </div>
            <div className={classes.image}>
                <img src={image} alt="menu item" />
            </div>
        </div>
    )
}
export default MenuItem