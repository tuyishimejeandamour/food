import Margin from '../shared/margin'
import './AddExpense.css'

function AddExpense(props) {
    return (
        <form>
            <Margin margin="20px">
                <div className="form-container">

                    <div className="form-title">
                        <span>Add Expense</span>
                    </div>
                    <div className="form-body">
                      <div className="input-div">
                          <label>name</label>
                          <input type="text" />
                      </div>
                    </div>
                    <div className="form-bottom">

                    </div>

                </div>
            </Margin>

        </form>
    )
}

export default AddExpense