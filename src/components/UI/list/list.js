import classes from './list.module.css'
const List = (props)=>{
    return(
        <div className={`${classes.listcontainer} ${props.className}`}>
            {props.children}
        </div>
    )
}

export default List