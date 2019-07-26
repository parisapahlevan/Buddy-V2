import React from "react";
import  SheltersMapContainer from "./SheltersMapContainer";
//import StethoscopeIcon from "../stethoscopeIcon.png";

export default class Map extends React.Component {
  dogs = [
    {
      location: { lat: 40.808714, lng: -73.965500 },
      uid: 0,
      title: "Tala"
    },
    {
      location: { lat: 40.811008, lng: -73.954314 },
      uid: 1,
      title: "Boo"
    },
    {
      location: { lat: 40.810628, lng: -73.960192 },
      uid: 2,
      title: "Zouzou"
    },
    {
      location: { lat: 40.807659, lng: -73.963095 },
      uid: 3,
      title: "Muchi"
    },
    {
      location: { lat: 40.803810, lng: -73.957938 },
      uid: 4,
      title: "sky"
    },
    {
      location: { lat: 40.806409, lng: -73.956038 },
      uid: 5,
      title: "Prince"
    }
  ];

  render(){
    return(
      <SheltersMapContainer shelters={this.pickAdog()}></SheltersMapContainer>
    );
  }

  pickAdog(){
    return this.props.dogId ? this.dogs.filter( dog => dog.uid === parseInt(this.props.dogId, 10) ) : this.dogs;
  }



}