
import reactDom from 'react-dom';
import './modal.css'
function ModalDisplay(props) {
    
    return (
        <div className="expense-modal" style={{background:props.background,display:props.display,width:props.width}}>
          {props.children}
        </div>
    )
}


function Modal(props) {
  
  return (
    <>
    {
      reactDom.createPortal(<ModalDisplay width={props.width} background={props.background} display={props.display}>{props.children}</ModalDisplay>,document.getElementById("overlay-root"))
    }
    </>
  )
}
export default Modal;