import React from 'react'
import polygon from './polygon.JPG'
import replit from './replit.JPG'
import devfolio from './devfolio.JPG'
function Sponsorscard() {
  return (
    <>
    <div className='gold'>
          <h1 className='gold-header'>
            GOLD TIER
          </h1>
          <div className='gold-images'>
            <img width={"40%"} src={devfolio} alt="DEVFOLIO LOGO" />
            <img width={"40%"} src={polygon} alt="POLYGON LOGO" />
          </div>
        </div>
        <div className='silver'>
          <h1 className='silver-header'>
            SILVER TIER
          </h1>
          <div className='silver-images'>
            <img width={"40%"} src={replit} alt="REPLIT LOGO" />
          </div>
        </div>

    </>
  )
}

export default Sponsorscard