import FlexCenter from '../shared/flexcenter'
import Margin from '../shared/margin'
import Bar from './bar'
import './chart.css'

function Chart(props) {
  const days = ['mon','tue','wed','thu','fri','sat','sun'];
  const keys =[1,2,3,4,5,6,7];
  const calculatepercentage = ()=>{
    if(props.maxvalue === 0) return;
    return keys.map((key)=>{
      
      return ( <Bar height={(props.value.get(key)/props.maxvalue)*100+"%"} />)
    })
  }
  return (

    <Margin margin="15px">
      <div className="chart-container">
        <div className="bars">
          {calculatepercentage()}
        </div>
        <div className="bars-names">
          {days.map((day)=>{
           return ( <FlexCenter className="bars-names-title">{day}</FlexCenter>)
          })}
        </div>
      </div>
    </Margin>
  )
}

export default Chart