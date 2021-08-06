import { useState } from 'react'

import Margin from '../shared/margin'
import './AddExpense.css'

function AddExpense(props) {
      const[title,setTitle] = useState('')
      const[description,setDescription] = useState('')
      const[amount,setAmount] = useState('')
      const[date,setDate] = useState('')
      
    const handletile =(event)=>{
         setTitle(event.target.value)
    }
    const handledescription =(event)=>{
        setDescription(event.target.value)
    }
    const handleamount =(event)=>{
        setAmount(event.target.value)
    }
    const handledate =(event)=>{
        setDate(event.target.value)
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        const expense ={
            title:title,
            description:description,
            amount:amount,
            date:new Date(date)
        }
        props.onAddExpense(expense)
        setDescription('')
        setTitle('')
        setDate('')
        setAmount('')
    }
    const handleOnHide = ()=>{
        props.hideModal()
    }
    return (
        <form onSubmit={handleSubmit}>
            <Margin margin="20px">
                <div className="center-form">
                <div className="form-container">
                   <Margin margin="15px">
                    <div className="form-title">
                        <span>Add Expense</span>
                    </div>
                    <div className="form-body">
                      <div className="input-div">
                          <label>title</label>
                          <input type="text" onChange={handletile} value={title} />
                      </div>
                      <div className="input-div">
                          <label>description</label>
                          <input type="text" onChange={handledescription} value={description}/>
                      </div>
                      <div className="input-div">
                          <label>amount</label>
                          <input type="number" min="0.01" step="0.01" value={amount} onChange={handleamount}/>
                      </div>
                      <div className="input-div">
                          <label>date</label>
                          <input type="date" min="2021-07-30" max="2021-12-31" value={date} onChange={handledate} />
                      </div>
                    </div>
                    <div className="form-bottom">
                      <button type="submit" className="save">save</button>
                      <button type="button" className="cancel" onClick={handleOnHide}>close</button>
                    </div>
                    </Margin>
                </div>
                </div>
            </Margin>

        </form>
    )
}

export default AddExpense