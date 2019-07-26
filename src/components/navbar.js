import React from 'react';
import {NavLink} from "react-router-dom";
import axios from '../axios';

function NavbarComponent(props) {
  const logOut = () => {
    axios.get('api/logout').then(() => {
    })
  };
    return(
        <div>
        {/* <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Paw</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link  href="#signin">Sign In</Nav.Link>
          <Nav.Link  href="#signup">Sign Up</Nav.Link>
          <Button variant="outline-light">Search</Button>
        </Nav>
      </Navbar> */}
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
  <h5 className="my-0 mr-md-auto font-weight-normal">Paw</h5>
  <nav className="my-2 my-md-0 mr-md-3">
    <NavLink className="p-2 text-dark" to="/">Search</NavLink>
    <NavLink className="p-2 text-dark" to="/login">Sign in</NavLink>
    <NavLink className="p-2 text-dark" to="/signup">Sign up</NavLink>
    <a onClick={logOut}>Log out</a>
  </nav>
</div>
      </div>
    );
}
const navLinkStyle = {
right:'0',
position:'absolute'
}

export default NavbarComponent;
