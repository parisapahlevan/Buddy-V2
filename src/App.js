import { Link, Switch, Route } from 'react-router-dom';
import React, { Component } from "react";
import './App.css';
import Home from './pages/home';
import Dogs from './pages/dogs';
import SignIn from "./pages/signin"
import Details from './pages/details';
// import Signup from "./pages/signup"
import ShelterForm from "./components/Form";
import API from './utils/API';
import Signup from './pages/signup';
class App extends Component {

  render() {
    console.log(API)
    return (
      <div className="App">
        <div className="App-intro">
          <Switch>
            <Route exact path="/"  component={Home} />
            <Route path="/dogs" component={Dogs} />   
            <Route path="/details/:dogId" component={Details} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={Signup} />
            <Route path="/admin" component={ShelterForm} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;