import React from 'react'
import bgFootball from '../assets/bg-football.jpg'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className="relative bg-black w-full overflow-hidden">
      <img className="w-full object-cover opacity-80" src={bgFootball} alt="header-bg" />
      <div className="logo flex justify-center item-end">
        <img className="absolute w-52 bottom-0" src={logo} alt="logo" />
      </div>
    </header>
  )
}

export default Header
