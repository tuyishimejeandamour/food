

import './dayDisplay.css'
import ExpenseItem from '../expense/expense'
import Margin from '../shared/margin'

const WeekDayDisplay = (props) => {

    const handleclick = () => {
        props.close()
    }
    const disp = () => {

        if (props.spendings) {
            return props.spendings.map((spending) => {
                return (
                    <>
                        <ExpenseItem key={spending.id} spending={spending}></ExpenseItem>
                        <div className="separator"></div>
                    </>
                )

            })
        } else {

            props.close()
        }

        return (<></>)

    }

    return (
        <div className="modal-content">
            <div className="modal-head">
                <span>thrusday spendings</span>
                <button className="closebutton" onClick={handleclick}>x</button>
            </div>
            <div className="modal-body">
                <Margin margin="10px">
                    {disp()}
                </Margin>
            </div>

        </div>
    )
}

export default WeekDayDisplay;