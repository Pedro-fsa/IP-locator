import React, {useState, useEffect, useCallback} from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import pin from '../images/map-pin.svg'

const containerStyle = {
  width: '100%',
  height: '100%'
};

const mapOptions = {
  disableDefaultUI: true,
}


const MapSection = (props) => {

  // GOOGLE MAPS CONFIG
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAPS_KEY
  })

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  const [center, setCenter] = useState()

  useEffect(() => {
    setCenter({lat: props?.ipData?.location?.lat, lng: props?.ipData?.location?.lng})
  }, [props.ipData])
  // END OF GOOGLE MAPS CONFIG

  return (
    isLoaded ?
      <div className="mapSection">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={mapOptions}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <Marker
            position={center}
            icon={pin}
          />
          <></>
        </GoogleMap>
      </div>
   : <></>
  )
}

export default MapSection
