import React from 'react'
import Competitions from "../Competitions";


const Home = ({competitions, loading, error, errMessage}) => {
  return (
    <>
    <Competitions competitions={competitions} loading={loading} error={error} errMessage={errMessage} />
    </>
  )
}

export default Home
