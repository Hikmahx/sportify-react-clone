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
  const [errMessage, setErrMessage] = useState('Please reload after a minute')
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
      <div className='App min-h-screen '>
        <Header />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <Home
                competitions={competitions}
                loading={loading}
                setLoading={setLoading}
                error={error}
                errMessage={errMessage}
              />
            }
          />
          <Route
            exact
            path='/competition/:id'
            element={
              <Details
                loading={loading}
                setLoading={setLoading}
                error={error}
                setError={setError}
                errMessage={errMessage}
                setErrMessage={setErrMessage}
              />
            }
          />
        </Routes>

        <div className='attribution py-4'>
          <div className='mt-5'>
            <p className='gray-600 text-center mb-6'>
              Built by{' '}
              <a href='https://github.com/hikmahx' className='attribution-link p-2'>
                Hikmah Yousuph
              </a>
            </p>
            <p className='text-center text-xs  mb-6'>
              {' '}
              Credits:{' '}
              <a href='https://www.football-data.org' className='attribution-link p-2'>
                Football data API
              </a>
            </p>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
