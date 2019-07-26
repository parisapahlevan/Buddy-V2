import React from "react";
import { Marker } from "react-google-maps";
//import paw from "./paw.png";

export default class ShelterMarker extends React.Component {

  render(){
    return(
        <Marker
          key={this.props.key}
          position={this.props.location}
          label={this.props.label}
          onClick={(()=> console.log("Hi there"))}
        >
        </Marker>
    );
  }
}