import React, {Component} from 'react';
import { Link } from "react-router-dom";
import axios from '../axios';
import { Container, Col, Row, Button, ButtonToolbar} from 'react-bootstrap';
import MyVerticallyCenteredModal from '../components/Checkout/login-yes';
import HeaderComponent  from "../components/Header/header";
import FooterComponent  from "../components/Footer/footer";
import Facebook from '../components/Facebook/facebook';

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

  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (<div>
                <div className="myHeader">
                  <HeaderComponent></HeaderComponent>
                </div>
                <div>
                  <Facebook></Facebook>
                </div>
            </div>
            );
  }
}

export default SignIn;
