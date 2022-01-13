import React from 'react'
import Competitions from "../Competitions";


const Home = ({competitions}) => {
  return (
    <>
      <Competitions competitions={competitions} />
    </>
  )
}

export default Home
