import './expense.css'
function ExpenseItem({spending}) {
    
    return (
        <div className="hover_div">
            <div className="expense-container">
               <div className="amount">
                   <div className="amount-money">
                       ${spending.amount}
                   </div>
                   <div className="divider"></div>
               </div>
               <div className= "descript">
                <div className="des-container">
                    <div className="title">{spending.title}</div>
                    <div className="descr">{spending.description}</div>
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