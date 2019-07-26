import React from 'react';
// import { Card, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import fakeDogs from '../../FakeDataBase';
import DogComponent from '../Dog/dog';

class DetailsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            dogsId: 0 
        };
    }
  componentDidMount(){
      this.setState({ dogsId : this.props.match.params.dogId})
  }  

  render() {
    return (
        <DogComponent className="my-dog-details" dogsId={this.state.dogsId}
            name={fakeDogs[this.state.dogsId].name} 
            age={fakeDogs[this.state.dogsId].age} 
            breed={fakeDogs[this.state.dogsId].breed} 
            image={fakeDogs[this.state.dogsId].image}>
        </DogComponent>
    );
  }

}

export default withRouter(DetailsComponent);