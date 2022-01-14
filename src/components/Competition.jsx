import React from 'react'
import EFL from '../assets/EFL.png'
import bundesliga from '../assets/bundesliga.png'
import eredivise from '../assets/eredivise.png'
import laliga from '../assets/laliga.png'
import liga from '../assets/liga.png'
import ligue from '../assets/ligue.png'
import PL from '../assets/PL.png'
import { Link } from 'react-router-dom'


const Competition = ({competition}) => {

  const emblemsDisplay = ()=>{
    switch (competition.id) {
      case 2001:
        return competition.emblemUrl
        break;
      case 2002:
        return bundesliga
        break;
      case 2003:
        return eredivise
        break;
      case 2014:
        return laliga
        break;
      case 2015:
        return ligue
        break;
      case 2016:
        return EFL
        break;
      case 2017:
        return liga
        break;
      case 2018:
        return competition.emblemUrl
        break;
      case 2019:
        return competition.emblemUrl
        break;
      case 2021:
        return PL
        break;
      default:
        break;
    }
  }
    return (
        <Link to ={`/competition/${competition.id}`} className='competition cursor-pointer flex py-6 px-7 w-full shadow-xl hover:shadow-2xl transition-all mb-8 rounded-sm'>
            <div className="img-container w-20 flex">
              <img src={emblemsDisplay()} alt="league-icon" />
            </div>
            <div className="info flex flex-col justify-center ml-1">
              <h4 className="font-medium text-xl mb-1">{competition.name}</h4>
              <p className="text-sm">{competition.area.name}</p>
            </div>

        </Link>
    )
}

export default Competition
