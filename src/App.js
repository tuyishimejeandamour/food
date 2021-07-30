
import { useState } from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/Header';
import Home from './pages/home';
function App() {

  const [spendings, setSpendings] = useState([])

  const handleNewExpense = (expense)=>{
    setSpendings([ ...spendings,expense]);
  }
  return (
    <div className="App">
      <div className="head">
       <Header />
       </div>
       <div className="body-div">
       <Home spendings = {spendings} onNewExpense={handleNewExpense} />
       </div>
       <Footer />
    </div>
  );
}

export default App;
