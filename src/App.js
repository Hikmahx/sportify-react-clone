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
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [errMessage, setErrMessage] = useState('')
  const [competitions, setCompetitions] = useState([])


  const Token = '778acfefb20a4acf9a9286e619e1b24a'
  
  const getCompetitions = ()=>{
    if(document.location.pathname === '/'){
      try{
        setLoading(true)

        Ids.forEach(async(id)=>{
          const url = `https://api.football-data.org/v2/competitions/${id}`
          const res = await fetch(url, { headers: { 'X-Auth-Token': Token } });
          const data = await res.json()
          setCompetitions(competitions=> [...competitions,data])
        })  

        setLoading(false)

      }catch(err){
        setError(true)
        setErrMessage("Please reload after a minute")
      }
    }
  }

  return (
    <Router>
      <div className="App min-h-screen ">
        <Header />
        <Routes>
          <Route exact path='/' element={
          <Home 
            competitions={competitions} 
            loading={loading}
            setLoading={setLoading}
            error={error}
            errMessage= {errMessage}
            />
          }/>   
          <Route exact path='/competition/:id'  element={
          <Details 
            loading={loading}
            setLoading={setLoading}
            error={error}
            setErrLor={setError}
            errMessage= {errMessage}
            setErrMessage={setErrMessage}
          />
          }/> 
        </Routes>  
      </div>
    </Router>
  );
}

export default App;
