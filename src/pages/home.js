import AddExpense from '../components/addexpense/AddExpense'
import Chart from '../components/chart/chart'
import DateDisplay from '../components/date-display/DateDisplay'
import Menu from '../components/menu/Menu'
import Margin from '../components/shared/margin'
import Summary from '../components/summary/summary'
import './home.css'
function Home({spendings}) {
    let date = new Set();
    let dates = [];
    spendings.map((spending)=>{
        if (!date.has(spending.date.toLocaleDateString())) {
            date.add(spending.date.toLocaleDateString())
        }
        return spendings
    })
    date.forEach((d)=>{
      dates.push(new Date(d).valueOf());
    })
    return (
        <div className="home">
            <div className="home-container">
                <div className="left-container">
                    <div className="space"></div>
                    <div className="expenseitem">
                        {dates.sort().reverse().map((date,index)=>{
                            return(<DateDisplay key={index} spendings={spendings} date={date} />)
                        })}
                    </div>
                </div>
                <div className="right-container">
                    <div className="right-margin">
                    <div className="menu">
                        <Menu />
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
                 <div className="addForm">
                   <AddExpense />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home;