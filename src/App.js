
import './App.css';
import  ExpenseItem from './components/expense/expense'
import Header from './components/header/Header';
function App() {
  return (
    <div className="App">
       <Header />
       <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
