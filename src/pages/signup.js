import React, {Component} from 'react';
import { Link } from "react-router-dom";
import axios from '../axios';
import { Container, Col, Row, Button, ButtonToolbar} from 'react-bootstrap';
import MyVerticallyCenteredModal from '../components/Checkout/signup-yes';
import HeaderComponent  from "../components/Header/header";
import FooterComponent  from "../components/Footer/footer";

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    error: null
  };

  doSignUp(e) {
    e.preventDefault();
    axios.post('http://localhost:8080/api/signup', {
      email: this.state.email,
      password: this.state.password
    }).then((user) => {
      console.log('here', user)
      // this.props.history.push('/login');
    }).catch((e) => {
      console.log(e);
      this.setState({error: 'There\'s probably already a user with such an email.'});
    });
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (
      <>
      <div className="myHeader">
      <HeaderComponent></HeaderComponent>
     </div>
      <div className="row">
        <div className="col-md-6 col-md-offset-3">

          <h2>Sign Up Form</h2>
          <form className="signup" onSubmit={(e) => this.doSignUp(e)}>
            <div className="form-group">
              <label htmlFor="email=input">Email address</label>
              <input type="email" className="form-control" id="email-input"
                     placeholder="Email" onChange = { event => this.setState({email: event.target.value})} />
            </div>
            <div className="form-group">
              <label htmlFor="password-input">Password</label>
              <input type="password" className="form-control" id="password-input"
                     placeholder="Password" onChange = { event => this.setState({password: event.target.value})} />
            </div>
            <div style={{display: this.state.error ? 'block' : 'none'}} id="alert" className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span> <span className="msg">{this.state.error}</span>
            </div>
            {/* <button type="submit" className="btn btn-default" onClick={(e) => this.doSignUp(e)}>Sign Up</button> */}
          </form>
          <br/>
          <Button 
                        className="dog-confirmation-container" 
                        variant="warning"
                        size="lg"
                        block 
                        onClick={() => this.setState({ modalShow: true })}>
                        C O N F I R M 
                      </Button>
                      <MyVerticallyCenteredModal
                        show={this.state.modalShow}
                        onHide={modalClose}
                      />
          <p>Or log in <Link to="/login">here</Link></p>
        </div>
      </div>
   
      </>
    );
  }
}

export default SignUp;
