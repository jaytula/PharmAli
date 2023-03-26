import React from 'react'
import '../../styles/Map.css'

function PharmLocator() {
  return (
    <div className='pharmLocator'>
      <div className='pharmacy-map'>
        <iframe title="pharmacy_locator" src="https://my.atlistmaps.com/map/e2f947f5-e898-49e2-afc2-d6c7ac4d59fb?share=true" allow="geolocation 'self' https://my.atlistmaps.com" width="100%" height="1150px" frameBorder="0" scrolling="no" allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default PharmLocator