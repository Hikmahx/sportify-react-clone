import React from 'react'
import Competition from "./Competition";
import Loading from './Loading';


const Competitions = ({competitions,  loading, error, errMessage}) => {

  if(!error){
    return (
      <>
    <div className="competitions-wrapper container mx-auto relative z-10 -mt-14 mb-12">
      <div style={{minHeight:"20rem"}} className="rounded border bg-white py-6 px-5 flex flex-col -mt-12">
        <h2 className="text-2xl font-medium mb-2">All Competitions</h2>
        <div className="flex justify-between flex-wrap gap-x-2">
      {loading ?
        <>
          <Loading />
        </>
        :
        <>
          {competitions.map(competition=>(
            <Competition key={competition.id} competition={competition} />
          ))}
        </>
        }
          
        </div>
      </div>
    </div>
  </>
    )
    }if(error){
      return(
        <p className="font-medium text-2xl py-12 text-center">{errMessage}</p>
      )
    }
}

export default Competitions
