import Chart from "./chart";


function ChartExpense(props) {

  const handleBarClick = (dayspendingdata)=>{
    props.onclick(dayspendingdata)
  }
    let maxvalue =0;
  const days = new Map();
  for (let i = 0; i < props.spendings.length; i++) {
    if(days.has(props.spendings[i].date.getDay())){
      const map = days.get(props.spendings[i].date.getDay())
      days.delete(props.spendings[i].date.getDay());
      const sum = map.amount+ Number.parseInt(props.spendings[i].amount);
      console.log(map)
      const spendings = [...map.spendings,props.spendings[i]];
      days.set(props.spendings[i].date.getDay(),{amount:sum,spendings:spendings})
    }else{
    days.set(props.spendings[i].date.getDay(), {amount:Number.parseInt(props.spendings[i].amount),spendings:[props.spendings[i]]});
    }
  }
  
  for (let detector of days.entries()) {
    maxvalue = maxvalue + detector[1].amount;
  }
  return (
      <Chart value={days} onclick={handleBarClick} maxvalue={maxvalue} />
  )
    
}

export default ChartExpense;