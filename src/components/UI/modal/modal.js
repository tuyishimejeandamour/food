import classes from './modal.module.css'
import reactDom from 'react-dom'
const Backdrop = (props)=>{

    return <div className={classes.backdrop} ></div>
}

const ModalOverlay = (props)=>{
   return(
       <div className={classes.modal}>
           <div className={classes.modalContent}>{props.children}</div>
       </div>
   )
}

const Modal = (props)=>{
   return(
       <>
       { reactDom.createPortal(<Backdrop />,document.getElementById('overlay'))}
       { reactDom.createPortal(<ModalOverlay >{props.children}</ModalOverlay>,document.getElementById('overlay'))}
       </>
   )
}

export default Modal