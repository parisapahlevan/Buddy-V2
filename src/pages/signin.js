import React, {Component} from 'react';
import { Link } from "react-router-dom";
import axios from '../axios';
import { Container, Col, Row, Button, ButtonToolbar} from 'react-bootstrap';
import MyVerticallyCenteredModal from '../components/Checkout/login-yes';
import HeaderComponent  from "../components/Header/header";
import FooterComponent  from "../components/Footer/footer";
import Facebook from '../components/Facebook/facebook';
import {Redirect} from 'react-router-dom';
class SignIn extends Component {
  state = {
    email: '',
    password: '',
    error: null
  };

  doLogIn(e) {
    e.preventDefault();
    console.log('sending')
    axios.post('http://localhost:8080/api/login', {
      email: this.state.email,
      password: this.state.password
    }).then((data) => {
      console.log('got from server ', data)
      // this.props.history.push('/');
    }).catch((e) => {
      console.log(e);
      this.setState({error: 'Email and password didn\'t match'})
    });
  }

  constructor(props){
    super(props);
    this.state ={
      redirectToReferrer: false,
      name:'',
      email:''
    }
  }

  componentDidMount(){ 
  let data = JSON.parse(sessionStorage.getItem('userData'));
    this.setState({name: data.userData.name});
    this.setState({email: data.userData.email});
  }

  render() {
    if(!sessionStorage.getItem('userData')){
      return (<Redirect to={'/login'}/>)
    }
    let modalClose = () => this.setState({ modalShow: false });
    return (<div>
                <div className="myHeader">
                  <HeaderComponent></HeaderComponent>
                </div>
                <div>
                  <Facebook></Facebook>
                </div>
                <h2>Welcome{this.state.name}</h2>
            </div>
            );
  }
}

export default SignIn;
