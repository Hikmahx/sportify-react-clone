import React from 'react'
import EFL from '../assets/EFL.png'

const Competition = () => {
    return (
        <div className='competition flex py-6 px-7 w-full shadow-xl mb-8 rounded-sm'>
            <div className="img-container w-20">
              <img src={EFL} alt="league-icon" />
            </div>
            <div className="info flex flex-col justify-center ml-1">
              <h4 className="font-medium text-xl mb-1">Championship</h4>
              <p className="text-sm">England</p>
            </div>

        </div>
    )
}

export default Competition
