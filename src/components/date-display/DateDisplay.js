
import './DateDisplay.css'
import ExpenseItem from '../expense/expense'
function DateDisplay() {

    return (
        <div>
        <div className="date-container">
            <div className="date-div">
            <div className="dash-lin">
            <div className="line"></div>
             <div className="date-display">
                 <span>To-day</span>
             </div>
            </div>
            </div>
            <div className="items">
                <ExpenseItem></ExpenseItem>
                <ExpenseItem></ExpenseItem>
                <ExpenseItem></ExpenseItem>
                <ExpenseItem></ExpenseItem>
            </div>
        </div>
        </div>
    )

}

export default DateDisplay