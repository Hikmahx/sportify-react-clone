import { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./components/Header";
import Details from './components/pages/Details';
import Home from './components/pages/Home';


function App() {

  useEffect(() => {
    getCompetitions()
  }, [])

  const [Ids, setIds] = useState([
    2016, 2021, 2001, 2018, 2015, 2002, 2019, 2003, 2017, 2014
  ])

  const [competitions, setCompetitions] = useState([])


  const Token = '778acfefb20a4acf9a9286e619e1b24a'
  
  const getCompetitions = ()=>{
    if(document.location.pathname === '/'){
      Ids.forEach(async(id)=>{
        const url = `https://api.football-data.org/v2/competitions/${id}`
        const res = await fetch(url, { headers: { 'X-Auth-Token': Token } });
        const data = await res.json()
        setCompetitions(competitions=> [...competitions,data])
      })  
    }
  }

  return (
    <Router>
      <div className="App min-h-screen ">
        <Header />
        <Routes>
          <Route exact path='/' element={
          <Home competitions={competitions} />
          }/>   
          <Route exact path='/competition/:id'  element={
          <Details competitions={competitions} />
          }/> 
        </Routes>  
      </div>
    </Router>
  );
}

export default App;
