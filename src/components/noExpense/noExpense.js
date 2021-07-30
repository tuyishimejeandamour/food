

import './noExpense.css'
function NoExpense({title,message}) {
    return(
        <div className="zero-container">
            <div className="message">
              {title}
            </div>
            <div className="zero">
                <span>{message}</span>
            </div>
        </div>
    )
}


export default NoExpense