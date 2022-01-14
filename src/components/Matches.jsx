import React from 'react'
import homeTeam from '../assets/home-team.png'
import visitorTeam from '../assets/visitor-team.png'


const Matches = ({matchItem}) => {
  let homeScore = parseInt(matchItem.score.fullTime.homeTeam) + parseInt(matchItem.score.halfTime.homeTeam)
  let awayScore = parseInt(matchItem.score.fullTime.awayTeam) + parseInt(matchItem.score.halfTime.awayTeam)


  return (
    <div className='match w-full md:w-1/2 p-4 flex items-center border-b-2 odd:border-r-2 border-gray-300 hover:shadow-2xl transition-all'>
      <div className="match-info w-2/3">
        <div className="home-team flex items-center mb-5">
          <img className="w-6 mr-3" src={homeTeam} alt="home-team" />
          <h4 className="text-xs">{matchItem.homeTeam.name}</h4>
          <div className={"outcome font-bold ml-auto" + ( awayScore !== homeScore? (homeScore > awayScore ? ' text-green-400' : ' text-red-400') : ' text-black')}>{homeScore}</div>
        </div>
        <div className="away-team flex items-center mb-5">
          <img className="w-6 mr-3" src={visitorTeam} alt="visitor-team" />
          <h4 className="text-xs">{matchItem.awayTeam.name}</h4>
          <div className={"outcome font-bold ml-auto" + ( awayScore !== homeScore?  (awayScore > homeScore ? ' text-green-400' : ' text-red-400') : ' text-black')}>{awayScore}</div>
        </div>
      </div>
      <div className="status w-1/3 border-l-2 border-gray-300 pl-2 ml-5 text-center">
        <h5 className="mb-2 text-base">FT</h5>
        <p className="text-xs mb-1">{matchItem.utcDate.slice(5, 10)}</p>
        <p className="text-xs mb-0">{matchItem.utcDate.slice(11, 16)}</p>
      </div>
    </div>
  )
}

export default Matches
