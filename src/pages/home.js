import { useState } from 'react'
import AddExpense from '../components/addexpense/AddExpense'
import Chart from '../components/chart/chart'
import DateDisplay from '../components/date-display/DateDisplay'
import Menu from '../components/menu/Menu'
import NoExpense from '../components/noExpense/noExpense'
import Margin from '../components/shared/margin'
import Summary from '../components/summary/summary'
import './home.css'
function Home({ spendings, onNewExpense }) {
    let date = new Set();
    let dates = [];
    const [showModal, setshowModal] = useState(false)
    const [ishiden, setishiden] = useState(false)
    spendings.map((spending) => {
        if (!date.has(spending.date.toLocaleDateString())) {
            date.add(spending.date.toLocaleDateString())
        }
        return spendings
    })
    date.forEach((d) => {
        dates.push(new Date(d).valueOf());
    })

    const handleNewExpense = (newexpense) => {
        const expense = {
            ...newexpense,
            id: Math.random().toString() + Date.now().toString()
        }
        onNewExpense(expense)
    }

    const DisplayExpense = () => {
        const displayable = []
        displayable.push(dates.sort().reverse().map((date, index) => {
            if (new Date(date).toLocaleDateString() !== new Date(Date.now()).toLocaleDateString()) {
                return (<DateDisplay key={index + 1} spendings={spendings} date={date} />)
            } else (
                displayable.unshift(<DateDisplay key={index + 1} spendings={spendings} date={date} />)
            )
            return undefined;

        }));
        return displayable;
    }
    const shownewExpenseModal = () => {
        if (showModal) {
            setishiden(false)
        } else (
            setishiden(true)
        )
        setshowModal(!showModal)
    }
    return (
        <div className="home">
            <div className="home-container">
                <div className="left-container">
                    <div className="space"></div>
                    {spendings.length > 0 ?
                        <div className="expenseitem">
                            {
                                DisplayExpense()
                            }

                        </div>
                        :
                        <div className="expenseitem">
                            <NoExpense title="No expense" message="you didn't spend any money yet" />
                        </div>
                    }
                </div>
                <div className="right-container">

                    <div className={`right-margin ${ishiden ? 'hide' : ''}`} >
                        <div className="menu">
                            <Menu showModal={shownewExpenseModal} />
                        </div>
                        <div className="chart">
                            <Chart />
                        </div>
                        <div className="summary">
                            <Margin margin="15px">
                                <Summary />
                            </Margin>
                        </div>
                    </div>
                    <div className="addForm" style={{ display: showModal ? 'block' : 'none' }}>
                        <AddExpense onAddExpense={handleNewExpense} hideModal={shownewExpenseModal} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;