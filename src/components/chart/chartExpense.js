import Chart from "./chart";


function ChartExpense(props) {

    let maxvalue =0;
  const days = new Map();
  for (let i = 0; i < props.spendings.length; i++) {
    if(days.has(props.spendings[i].date.toString().split(' ')[0])){
      const mapvalue = days.get(props.spendings[i].date.toString().split(' ')[0]);
      days.delete(props.spendings[i].date.toString().split(' ')[0]);
      const sum = mapvalue+ Number.parseInt(props.spendings[i].amount);
      days.set(props.spendings[i].date.toString().split(' ')[0],sum)
    }else{
    days.set(props.spendings[i].date.getDay(), Number.parseInt(props.spendings[i].amount));
    }
  }
  
  for (let detector of days.entries()) {
    maxvalue = maxvalue + detector[1];
  }
  return (
      <Chart value={days} maxvalue={maxvalue} />
  )
    
}

export default ChartExpense;