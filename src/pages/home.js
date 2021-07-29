import Chart from '../components/chart/chart'
import DateDisplay from '../components/date-display/DateDisplay'
import Menu from '../components/menu/Menu'
import Margin from '../components/shared/margin'
import Summary from '../components/summary/summary'
import './home.css'
function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <div className="left-container">
                    <div className="space"></div>
                    <div className="expenseitem">
                       <DateDisplay />
                       <DateDisplay />
                       <DateDisplay />
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
                </div>
            </div>
        </div>
    )
}

export default Home;