
import classes from './menuItem.module.css'
import image from '../../../assets/plate.jpg'
import MenuOverlap from "./overlay"
import { useState } from 'react'
const MenuItem= (props)=>{
    const [show ,setShow] = useState(false)
    const showhandle = ()=>{
       setShow(true)
    }

    const handleLeave = ()=>{
        setShow(false)
    }
    return(
        <div onMouseOver={showhandle} onMouseLeave={handleLeave}   className={classes.menuItem}>
            <div className={classes.title}>
                menu
            </div>
            <div className={classes.image}>
                <img src={image} alt="menu item" />
            </div>
            {show && 
            <MenuOverlap onMouseOver ={showhandle} onMouseLeave={handleLeave} />
            }
        </div>
        
        
    )
}
export default MenuItem