
import classes from './composition.module.css'
import Flex from '../../layout/flex/flexcontainer'
import Button from '../../UI/Button/Button'
const Composition = (props)=>{
   return (
       <div className={classes.composition}>
           <Flex className={classes.flexcontainer}>
            <div className={classes.title}>
               <span>Composition</span>
            </div>
            <div className={classes.body}>
                {props.children}
            </div>
            <div className={classes.bottom}>
              <Button className={classes.button}>
                add cart
              </Button>
            </div>
           </Flex>
       </div>
   )
}

export default Composition