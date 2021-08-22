
import Grid from "../../layout/grid/grid"
import MenuItem from "../../UI/selectedMenuItem/menuItem"
const SelectedMenu = ()=>{
    const i = [1,2,3,4,5,6,7,8,9]
   return(
       <Grid>
       {
       i.map((item)=>{

           return <MenuItem key={item}></MenuItem>
       })
       }
       </Grid>
   )
}

export default SelectedMenu