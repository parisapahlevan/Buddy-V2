import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom'

class DogComponent extends React.Component {
  render() {
    return (
      <Card>
        <Card.Img className="dog-img" variant="top" src={this.props.image} />
        <Card.Body>
          <Card.Title>
            Name: {this.props.name}
          </Card.Title>
          <Card.Title>Age: {this.props.age} years old</Card.Title>
          <Card.Title>Breed: {this.props.breed}</Card.Title>
          <Link to={`/details/${this.props.dogsId}`}>
            <Button className="card-button" variant="primary">
              <i className="fas fa-paw"></i> 
              <span className='paw-btn'>PAW</span>
            </Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }

}

export default withRouter(DogComponent);