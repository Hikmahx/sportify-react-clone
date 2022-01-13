import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./components/Header";
import Details from './components/pages/Details';
import Home from './components/pages/Home';


function App() {
  return (
    <Router>
      <div className="App min-h-screen ">
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />}/>   
          <Route exact path='/competition/' element={<Details />}/> 
        </Routes>  
      </div>
    </Router>
  );
}

export default App;
