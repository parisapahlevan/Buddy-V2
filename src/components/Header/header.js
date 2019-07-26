import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, NavLink} from "react-router-dom";

class HeaderComponent extends React.Component {
    render() { 
        return (
            <div>
                <div className="header-box">
                    <Container>
                        <Row>
                            <Col xs={12} md={8}>
                                <p className="logo"><i className="fas fa-paw"></i><Link to="/">Buddy</Link></p>
                            </Col>
                            <Col xs={6} md={4} className="myUser">

                                <NavLink to="/Signin">Signin</NavLink>/<NavLink to="/Signup">Signup</NavLink>

                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;