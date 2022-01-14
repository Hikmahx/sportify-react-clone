import React from 'react'

const Loading = () => {
    return (
        <div className="loading-container w-full flex relative">
          <div className="loading-wrapper w-full flex items-center justify-center">
            <div className="ripples relative w-20 h-20">
              <div className='absolute inset-0 rounded-full border-4 w-20 h-20'></div>
              <div className='absolute inset-0 rounded-full border-4 w-20 h-20'></div>
            </div>           
          </div>
        </div>
    )
}

export default Loading
