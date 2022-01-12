import React from 'react'
import Competition from "./Competition";


const Competitions = () => {
  return (
    <div className="competitions-wrapper container mx-auto relative z-10 -mt-14 mb-12">
      <div style={{minHeight:"20rem"}} className="rounded border bg-white py-6 px-5 flex flex-col -mt-12">
        <h2 className="text-2xl font-medium mb-2">All Competitions</h2>
        <div className="flex justify-between flex-wrap gap-x-2">
          <Competition />
        </div>
      </div>
    </div>
  )
}

export default Competitions
