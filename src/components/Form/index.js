import React, { Component } from "react";
import { Row, Col, Form, FormGroup, Button } from 'react-bootstrap';
import HeaderComponent from "../Header/header";
import FooterComponent from "../Footer/footer";
import './style.css'


let imgURLVar = "";

var firebase = require('firebase');
// require('firebase/storage');
var firebaseConfig = {

  apiKey: "AIzaSyDWg5xUa_bl4UdBFPZKI0zkdqeVDVWoU_8",
  authDomain: "paw-media.firebaseapp.com",
  databaseURL: "https://paw-media.firebaseio.com",
  projectId: "paw-media",
  storageBucket: "paw-media.appspot.com",
  messagingSenderId: "44643133731",
  appId: "1:44643133731:web:1f1aeaf218dfb6b8"

};

//initialize app

firebase.initializeApp(firebaseConfig);

 //global vars  
 var image = null;
 var video = null; 
 
var storage = firebase.storage();





class ShelterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL:'',
      videoURL:'',
      Name:'',
      Breed:'',
      shelterName:'',
      zipCode:'',
      gender:'male',
      age:0
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleBreedChange = this.handleBreedChange.bind(this);
    this.handleSheleterNameChange = this.handleSheleterNameChange.bind(this);
    this.handleZipCodeChange = this.handleZipCodeChange.bind(this);
    this.handleSheleterNameChange = this.handleSheleterNameChange.bind(this);
    this.handleVideoFormSubmit = this.handleVideoFormSubmit.bind(this);
    this.handleImageFormSubmit = this.handleImageFormSubmit.bind(this);
  }
  // Setting the initial values of this.state.username and this.state.password
  // state = {
  //   username: "",
  //   password: ""
  // };



  // // handle any changes to the input fields
  // handleInputChange = event => {
  //   // Pull the name and value properties off of the event.target (the element which triggered the event)
  //   const { name, value } = event.target;

  //   // Set the state for the appropriate input field
  //   this.setState({
  //     [name]: value

    
  //   });



  // };  

  // When the form is submitted, prevent the default event and alert the username and password
  handleImageFormSubmit = (event) => {
    event.preventDefault();

    image = document.querySelector('input.image[type=file]').files[0];
    console.log("uploading " + image.name);


    // var name = image.name;

    var storageRef = storage.ref(`/image/${image.name}`);

    storageRef.put(image).then(snapshot => {
       // console.log(snapshot);
       storageRef.getDownloadURL().then(imageURL => {
        this.setState({
          imageURL: imageURL
        });  
                   console.log("send image to database")
       });
    })
    
  
      


   // var name = image.name;

  //   const storageRef = storage.ref(`/image/${name}`);

  //   storageRef.put(photo).then(function(snapshot){
  //      // console.log(snapshot);
  //      storageRef.getDownloadURL().then(function (photoURL){
  //          //save downloadurl to state
  //          console.log(photoURL)
  //     //.then //video upload
  //   //})
  // )};

  };


  handleVideoFormSubmit = (event) => {
    event.preventDefault();

    video = document.querySelector('input.video[type=file]').files[0];
    console.log("uploading " + video.name);
  
    // var name = video.name;

    var storageRef = storage.ref(`/video/${video.name}`);
    let videoURLVar;
    storageRef.put(video).then(snapshot => {
       // console.log(snapshot);
       storageRef.getDownloadURL().then(videoURL => {
         videoURLVar = videoURL;
         this.setState({
          videoURL:videoURL
      });
           console.log("send video to database");
       });
 
    });

   // var name = image.name;

  //   const storageRef = storage.ref(`/image/${name}`);

  //   storageRef.put(photo).then(function(snapshot){
  //      // console.log(snapshot);
  //      storageRef.getDownloadURL().then(function (photoURL){
  //          //save downloadurl to state
  //          console.log(photoURL)
  //     //.then //video upload
  //   //})
  // )};

  };


  handleSave = () => {
    fetch('/admin/api/dogs', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        gender: this.state.gender,
        imageURL: this.state.imageURL,
        videoURL: this.state.videoURL,
        zipCode: this.state.zipCode,
        shelterName:this.state.shelterName,
        age:this.state.age,
        name:this.state.Name,
        Breed: this.state.Breed
      })
    });
  }

  handleCancel = () => {
    console.log("cancel");
  }

  handleAgeChange(event) {
    this.setState({
        age: event.target.value,
    });
}

handleSheleterNameChange(event) {
  this.setState({
      shelterName: event.target.value,
  });
}


handleBreedChange(event) {
  this.setState({
      Breed: event.target.value,
  });
}

handleZipCodeChange(event) {
  this.setState({
      zipCode: event.target.value,
  });
}

handleNameChange(event) {
  this.setState({
      Name: event.target.value,
  });
}

  
  render() {
    
    return (
      <>
      <div className="form-page">

        <div>
          <HeaderComponent></HeaderComponent>
        </div>

<div className="search-test">
       <Form>
  <Form.Group as={Row} >
    <Form.Label column sm={1}>
      Name
    </Form.Label>
    <Col sm={5}>
      <Form.Control onChange={this.handleNameChange} type="email" placeholder="What is the dog's name" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} >
    <Form.Label column sm={1}>
      Age
    </Form.Label>
    <Col sm={5}>
      <Form.Control onChange={this.handleAgeChange} type="email" placeholder="Please enter age or estimated age" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} >
    <Form.Label column sm={1}>
      Breed
    </Form.Label>
    <Col sm={5}>
      <Form.Control onChange={this.handleBreedChange} type="email" placeholder="Specify the dog breed or mix" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} >
    <Form.Label column sm={1}>
      Shelter Name
    </Form.Label>
    <Col sm={5}>
      <Form.Control onChange={this.handleSheleterNameChange} type="email" placeholder="Name of the Shelter where the dog is located" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} >
    <Form.Label column sm={1}>
      Zip Code
    </Form.Label>
    <Col sm={5}>
      <Form.Control onChange={this.handleZipCodeChange} type="email" placeholder="Zip code where the Shelter is located" />
    </Col>
  </Form.Group>




      <br></br>

      <h4>Video Upload</h4>
      <div>
     <input type="file" accept="video/mp4" class="video"/>
     <input type="submit" onClick={this.handleVideoFormSubmit} class="vidSubmit" value="upload video"/>
     </div>
      <br></br>
      <br></br>
      
     <h4>Image Upload</h4>
     <input type="file" accept="image/jpg" class="image"/>
     <input type="submit" onClick={this.handleImageFormSubmit} class="imgSubmit" value="upload image"/>

  

 
</Form>

  </div>
  </div>
  <button onClick={this.handleSave}> Save </button>
  <button onClick={this.handleCancel}> Cancel </button>
    </>
    );
  }
}

export default ShelterForm;