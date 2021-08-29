
import classes from './table.module.css'
const Table = () => {

    return (
        <div className={classes.table}>
            <div className={classes.tableHeader}>
                <div>name</div>
                <div>amount</div>
                <div>price</div>
            </div>
            <div className={classes.tr}>
                <div className={classes.tableColumn}>
                    <td>sushi</td>
                    <td>4</td>
                    <td>$12</td>
                </div>
                <div className={classes.separator}></div>
            </div>
            <div className={classes.tr}>
                <div className={classes.tableColumn}>
                    <td>sushi</td>
                    <td>4</td>
                    <td>$12</td>
                </div>
                <div className={classes.separator}></div>
            </div>
            <div className={classes.tr}>
                <div className={classes.tableColumn}>
                    <td>sushi</td>
                    <td>4</td>
                    <td>$12</td>
                </div>
                <div className={classes.separator}></div>
            </div>
            <div className={classes.tr}>
                <div className={classes.tableColumn}>
                    <td>sushi</td>
                    <td>4</td>
                    <td>$12</td>
                </div>
                <div className={classes.separator}></div>
            </div>
            <div className={classes.tr}>
                <div className={classes.tableColumn}>
                    <td>sushi</td>
                    <td>4</td>
                    <td>$12</td>
                </div>
                <div className={classes.separator}></div>
            </div>
            <div className={classes.tr}>
                <div className={classes.tableColumn}>
                    <td>sushi</td>
                    <td>4</td>
                    <td>$12</td>
                </div>
                <div className={classes.separator}></div>
            </div>

        </div>
    )

}


export default Table