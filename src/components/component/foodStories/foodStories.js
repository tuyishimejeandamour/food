import Story from "./story"
import classes from './foodStories.module.css'
const FoodStories = ()=>{
    return(
        <div  className={classes.foodStories}>
            <Story></Story>
            <Story></Story>
            <Story></Story>
            <Story></Story>
            <Story></Story>
        </div>
    )
}

export default FoodStories