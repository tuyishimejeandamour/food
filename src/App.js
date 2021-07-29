
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home';
function App() {
  return (
    <div className="App">
      <div className="head">
       <Header />
       </div>
       <div className="body-div">
       <Home />
       </div>
       
    </div>
  );
}

export default App;
