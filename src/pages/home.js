import React from 'react';
import HeaderComponent from "../components/Header/header";
import FooterComponent from "../components/Footer/footer";
import SearchComponent from "../components/Search/search";
import axios from "axios";
import RealDataBase from "../RealDataBase";
let shelterZipCodeArray = [];
class Home extends React.Component {
  
  //ToDo add constructor, state, component did mount and axios function to store shelters in state.
  constructor(props) {
    super(props);
    this.state = {
      sheltersZipCodes:[]
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/all').then(res => {
      for (var i = 0; i < res.data.length; i++) {
        shelterZipCodeArray.push(res.data[i].ZIPCODE.toString());
      }
    })
    console.log(shelterZipCodeArray);
    this.setState = ({
      sheltersZipCodes: shelterZipCodeArray
    });
  };


  render() {
    return (
      <div className="home-page">
        <div className="myHeader">
          <HeaderComponent></HeaderComponent>
        </div>
        <div className="mySearch">
          <SearchComponent suggestions={shelterZipCodeArray} ></SearchComponent>
        </div>
        <div className="myFooter">
          <FooterComponent></FooterComponent>
        </div>
      </div>
    );
  }
}

export default Home;