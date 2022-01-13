import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Standings from '../Standings'


const Details = ({competitions}) => {
  useEffect(() => {
    getStandings()
  }, [])

  const [id, setId] = useState()
  const [stands, setStands] = useState([])

  const Token = '778acfefb20a4acf9a9286e619e1b24a'


  let itemId = parseInt(document.location.pathname.slice(-4))
  const getStandings = async ()=>{
    localStorage.setItem('id', itemId)
    if (id === undefined){
      setId(localStorage.getItem('id'))
    }else{
      competitions.forEach(competition=>{
        if(competition.id === parseInt(document.location.pathname.slice(-4))){
          setId(competition.id)
        }
      })  
    }
    const url = `https://api.football-data.org/v2/competitions/2016/standings`
    const res = await fetch(url, { headers: { 'X-Auth-Token': Token } });
    const data = await res.json()
    setStands(data.standings[0].table)
  }

  return (
    <div style={{maxWidth: '43.75rem', fontFamily:`'Poppins', sans-serif`}} className="details-wrapper container mx-auto relative z-10 -mt-14 mb-12">
      <div style={{minHeight:"20rem"}} className="rounded border bg-white py-6 px-5 flex flex-col -mt-12">
        <div className="flex items-end text-xl mb-2 whitespace-pre-wrap">
          <Link to={'/'} className=" font-medium cursor-pointer">All Competitions</Link>
          <span className=""> / </span>
          <span className='text-gray-500'>Championship</span>
        </div>
        <div style={{background: '#dd7c00'}} className="tabs-header h-16 flex items-center text-center">
          <div className="tab-title text-white flex-1">
            <h3 className="uppercase">standings</h3>
          </div>
          <div className="tab-title text-white flex-1">
            <h3 className="uppercase">matches</h3>
          </div>
        </div>
        <div className="tabs">
          <div className="tabs-table shadow-2xl rounded-sm mb-8 py-8 px-3 m-1 mt-8">
            <div style={{minHeight:'4rem'}} className="tbl-row table-title flex text-center border-b-2 border-gray-200 text-gray-400 py-2">
              <div className="flex-1 m-1 position"></div>
              <div style={{minWidth: '200px'}} className="flex-2 m-1 team font-bold text-left">Team</div>
              <div className="flex-1 m-1 mp">MP</div>
              <div className="flex-1 m-1 win">WIN</div>
              <div className="flex-1 m-1 draw">D</div>
              <div className="flex-1 m-1 lose">L</div>
              <div className="flex-1 m-1 gf">GF</div>
              <div className="flex-1 m-1 ga">GA</div>
              <div className="flex-1 m-1 points">Pts</div>
            </div>
            {stands.map(stand=>(
              <Standings stand={stand} />
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Details
