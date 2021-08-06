

import './modal.css'
function Modal(props) {
    
    return (
        <div className="expense-modal" style={{background:props.background?props.background:''}}>
          {props.children}
        </div>
    )
}

export default Modal;