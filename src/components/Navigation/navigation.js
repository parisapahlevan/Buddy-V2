import React from "react";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
    render() {
        return (
            <div>
            <NavLink to="/">FrontPage</NavLink>
            <NavLink to="/Results">Results</NavLink>
            </div>
        )
    }
}

export default Navigation; 