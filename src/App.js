
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home';
function App() {
  const Spendings =[
    {
      id:"1",
      title:"buying shirt",
      description:"i need shirt past few days to attend party",
      amount: 23.12,
      date:new Date('7/10/2011')
    },
    {
      id:"2",
      title:"helping stranger",
      description:"i saw i stranger in street begging the i donate",
      amount: 100.00,
      date:new Date('7/29/2021')
    }
    ,
    {
      id:"3",
      title:"buyin food",
      description:"i saw i stranger in street begging the i donate",
      amount: 50.00,
      date:new Date('7/08/2021')
    }
  ]
  return (
    <div className="App">
      <div className="head">
       <Header />
       </div>
       <div className="body-div">
       <Home spendings = {Spendings} />
       </div>
       
    </div>
  );
}

export default App;
