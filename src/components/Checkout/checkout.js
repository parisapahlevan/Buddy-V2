import { Modal, Button } from 'react-bootstrap';
import React from 'react';

class MyVerticallyCenteredModal extends React.Component {
    render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          animation={false} 
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              B U D D Y !
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>I will see you B U D D Y ! . . . </h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }

  export default MyVerticallyCenteredModal;
