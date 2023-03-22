import React from 'react'
import '../../styles/Map.css'

function PharmLocator() {
  return (
    <div className='pharmLocator'>
      <div className='pharmacy-map'>
      <iframe src="https://my.atlistmaps.com/map/e2f947f5-e898-49e2-afc2-d6c7ac4d59fb?share=true" allow="geolocation 'self' https://my.atlistmaps.com" width="100%" height="100%" frameborder="0" scrolling="no" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default PharmLocator