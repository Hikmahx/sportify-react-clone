import React, { useEffect, useRef, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import Matches from '../Matches'
import Standings from '../Standings'
import Loading from '../Loading'


const Details = ({ loading, setLoading, error, setError, errMessage, setErrMessage}) => {
  useEffect(() => {
    getName()
    getStandings()
    getMatches()
    tabs()
  }, [])

  const [stands, setStands] = useState([])
  const [match, setMatch] = useState([])
  const [name, setName] = useState([])

  const params = useParams()

  const Token = '778acfefb20a4acf9a9286e619e1b24a'

  const getStandings = async ()=>{
    try{
      setLoading(true)

      const url = `https://api.football-data.org/v2/competitions/${params.id}/standings`
      const res = await fetch(url, { headers: { 'X-Auth-Token': Token } });
      const data = await res.json()
      setStands(data.standings[0].table)

      setLoading(false)
    }catch(err){
      setError(true)
      setErrMessage('Please reload after a minute')
    }
  }

  const getMatches = async ()=>{
    try{
      setLoading(true)

      const url = `https://api.football-data.org/v2/competitions/${params.id}/matches?matchday=1`
      const res = await fetch(url, { headers: { 'X-Auth-Token': Token } });
      const data = await res.json()
      setMatch(data.matches)

      setLoading(false)

    }catch(err){
      setError(true)
      setErrMessage('Please reload after a minute')
    }
  }

  const getName = async ()=>{
    try{
      setLoading(true)

      const url = `https://api.football-data.org/v2/competitions/${params.id}`
      const res = await fetch(url, { headers: { 'X-Auth-Token': Token } });
      const data = await res.json()
      setName(data)

      setLoading(false)

    }catch(err){
      setError(true)
      setErrMessage('Please reload after a minute')
    }
  }

  let tabTable = useRef(null)
  let tabMatch = useRef(null)

  const matchInfo = ()=>{
    tabMatch.current.classList.add('active')
    tabTable.current.classList.remove('active')
  }

  const standInfo = ()=>{
    tabTable.current.classList.add('active')
    tabMatch.current.classList.remove('active')
  }
  const tabs = ()=>{
    let tabTitle = document.querySelectorAll('.tab-title')    
    for (let number = 0; number < tabTitle.length; number++) {
      tabTitle[number].addEventListener('click', ()=>{
        tabTitle.forEach(title => {
          title.classList.remove('active');
          tabTitle[number].classList.add('active');
        });
      })
    }
  }


  if(!error){
    return (
          <div className="details-wrapper container mx-auto relative z-10 -mt-14 mb-12">
            <div style={{minHeight:"20rem"}} className="rounded border bg-white py-6 px-5 flex flex-col -mt-12">
              <div className="flex items-end text-xl mb-2 whitespace-pre-wrap">
                <Link to={'/'} className="home-link font-medium text-lg cursor-pointer p-2">All Competitions</Link>
                <span className="py-2"> / </span>
                <span className='text-gray-400 text-lg py-2'>{name.name}</span>
              </div>
              <div style={{background: '#dd7c00'}} className="tabs-header h-16 flex items-center text-center my-5">
                <div onClick={standInfo} className="tab-title active relative text-white flex-1 flex items-center justify-center">
                  <h3 className="uppercase">standings</h3>
                </div>
                <div onClick={matchInfo} className="tab-title relative text-white flex-1 flex items-center justify-center">
                  <h3 className="uppercase">matches</h3>
                </div>
              </div>
              {loading ?
                <>
                <Loading />
                </>
                :
              <div className="tabs">
                <div ref={tabTable} className="tab-info tabs-table overflow-scroll lg:overflow-auto active shadow-2xl rounded-sm mb-8 py-8 px-3 m-1 mt-8">
                  <div style={{minHeight:'4rem'}} className="tbl-row table-title flex text-center border-b-2 border-gray-200 text-gray-400 py-2">
                    <div className="flex-1 m-1 position"></div>
                    <div style={{minWidth: '200px', maxWidth:'240px', width:'100%'}} className="flex-2 m-1 team font-bold text-left">Team</div>
                    <div className="flex-1 m-1 mp">MP</div>
                    <div className="flex-1 m-1 win">WIN</div>
                    <div className="flex-1 m-1 draw">D</div>
                    <div className="flex-1 m-1 lose">L</div>
                    <div className="flex-1 m-1 gf">GF</div>
                    <div className="flex-1 m-1 ga">GA</div>
                    <div className="flex-1 m-1 points">Pts</div>
                  </div>
                  {stands.map(stand=>(
                    <Standings key={stand.team.id} stand={stand} />
                  ))}
                </div>
                <div ref={tabMatch} className="tab-info tabs-matches overflow-scroll lg:overflow-auto">
                  <div className='matches mb-8 -mx-4'>
                    {/* <h3 className="text-2xl mb-2 mx-4">Matchweek {name.currentSeason.currentMatchday}</h3> */}
                    <div className="match-wrapper flex w-full flex-wrap">  
                    {match.map(matchItem=>(
                      <Matches key={matchItem.id} matchItem={matchItem} />
                    ))}              
                    </div>
                  </div>
                </div>
              </div>
            }
            </div>
          </div>
    )
  }else{
    return(
      <p className="font-medium text-xl text-center py-12">{errMessage}</p>
    )
  }
}

export default Details
