
import classes from './composition.module.css'
import Flex from '../../layout/flex/flexcontainer'
const Composition = (props)=>{
   return (
       <div className={classes.composition}>
           <Flex>
            <div className={classes.title}>
               <span>Composition</span>
            </div>
            <div className={classes.body}>

            </div>
            <div className={classes.bottom}>

            </div>
           </Flex>
       </div>
   )
}

export default Composition