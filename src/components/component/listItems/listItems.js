import List from "../../UI/list/list"
import classes from './listItems.module.css'
const ListITems = () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 9,8,10]
    return (
        <div>
            {
                items.map((item) => {
                   return( 
                   <List key={item}>
                        <div className={classes.name}>
                            <span></span>
                            name
                            </div>
                        <div className={classes.content}>
                            content<br/>
                            content<br/>
                            content<br/>
                            content<br/>
                        </div>
                        <div className={classes.action}>action</div>
                    </List>
                   )
                })
            }
        </div>

    )
}

export default ListITems