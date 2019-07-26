// sheltersMap.js

import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import ShelterMarker from "./SheltersMarker";

const SheltersMap = withScriptjs(
  withGoogleMap( (props) =>{
    const markers = props.shelters
    .map( 
      doctor => <ShelterMarker 
      key={doctor.uid} 
      location={doctor.location}
      label={doctor.title}
      />
      );
                  
  return (
      <GoogleMap 
        defaultZoom={15} 
        defaultCenter={ { lat: 40.8075, lng: -73.9626 } }
      >
        {markers}
      </GoogleMap>
    );
  }
))

export default SheltersMap;
