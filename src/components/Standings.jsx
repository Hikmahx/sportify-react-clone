import React from 'react'

const Standings = ({stand}) => {
  return (
    <div style={{minHeight:'4rem'}} className="tbl-row table-title flex text-center border-b-2 border-gray-200 py-2">
      <div className="flex-1 m-1 position">{stand.position}</div>
      <div style={{width: '200px'}} className="flex-2 m-1 team text-left flex-wrap">{stand.team.name}</div>
      <div className="flex-1 m-1 mp">{stand.playedGames}</div>
      <div className="flex-1 m-1 win">{stand.won}</div>
      <div className="flex-1 m-1 draw">{stand.draw}</div>
      <div className="flex-1 m-1 lose">{stand.lost}</div>
      <div className="flex-1 m-1 gf">{stand.goalsFor}</div>
      <div className="flex-1 m-1 ga">{stand.goalsAgainst}</div>
      <div className="flex-1 m-1 points">{stand.points}</div>
    </div>  
    )
}

export default Standings
