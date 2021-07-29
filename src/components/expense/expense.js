import './expense.css'
function ExpenseItem() {
    
    return (
        <div className="hover_div">
            <div className="expense-container">
               <div className="amount">
                   <div className="amount-money">
                       $20.23
                   </div>
                   <div className="divider"></div>
               </div>
               <div className= "descript">
                <div className="des-container">
                    <div className="title">title</div>
                    <div className="descr">description </div>
                </div>
                <div className="edit-button">
                 <span>/</span>
                </div>
               </div>
            </div>
        </div>
    )
}


export default ExpenseItem;