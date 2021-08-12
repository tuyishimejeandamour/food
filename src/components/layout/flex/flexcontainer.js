
import classes from './flexcontainer.module.css'

const Flex = (props)=>{
    return (
    <div className={`${classes.flexdiv} ${props.className}`} style={{width:props.width,height:props.height,flex:props.flex}}>
        {props.children}
    </div>
    )
}

export default Flex