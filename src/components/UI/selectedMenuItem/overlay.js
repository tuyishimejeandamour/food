import classes from './menuItem.module.css'
import {useHistory } from 'react-router-dom'
const MenuOverlap = (props)=>{
    const history = useHistory()
    const handleOnOver =()=>{
        props.onMouseOver()
    }
    const handleleave = ()=>{
        props.onMouseLeave()
    }
   return (
       <div className={classes.overlap} onMouseLeave={handleleave} onMouseOver={handleOnOver}>
           <button onClick={()=>history.push('/product/2')}>↗</button>
           <button>+</button>
       </div>
   )
}

export default MenuOverlap