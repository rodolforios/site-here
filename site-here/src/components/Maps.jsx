import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

 

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -22.866824857127657,
  lng: -47.222216302028784
};



function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey= 'AIzaSyCUu5i0A2BZNAnvu1hQNPMji36RdvcwAVI'
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)