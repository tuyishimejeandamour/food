
import './DateDisplay.css'
import ExpenseItem from '../expense/expense'
function DateDisplay({ spendings, date }) {
    return (
        <>
            <div className="date-container">
                <div className="date-div">
                    <div className="dash-lin">
                        <div className="line"></div>
                        <div className="date-display">
                            <span>{
                             new Date(Date.now()).toLocaleDateString() === new Date(date).toLocaleDateString()?'To-day':new Date(date).toLocaleDateString()
                            }
                            </span>
                        </div>
                    </div>
                </div>
                <div className="items">
                    {spendings.map((spending, i) => {
                        if (spending.date.toLocaleDateString() === new Date(date).toLocaleDateString()) {
                            return (
                            <ExpenseItem key={spending.id} spending={spending}></ExpenseItem>
                            
                            )

                        }
                        return undefined;

                    })}
                </div>
            </div>
        </>
    )

}

export default DateDisplay