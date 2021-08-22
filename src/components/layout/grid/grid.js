import classes from './grid.module.css'
const Grid = (props)=>{

    return(
        <div className={`${classes.box} ${props.className}`}>
            {props.children}
        </div>
    )

}

export default Grid