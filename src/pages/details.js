import React from 'react';
import HeaderComponent  from "../components/Header/header";
import FooterComponent  from "../components/Footer/footer";
import DetailsComponent from "../components/Details/details";
import Map from "../components/GoogleMap/map";
import { Container, Col, Row, Button, ButtonToolbar} from 'react-bootstrap';
import VideoComponent from "../components/Video/video";
import DateTimeForm from '../components/Calendar/calendar';
import MyVerticallyCenteredModal from '../components/Checkout/checkout';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      modalShow: false 
    };
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (
      <div className="dog-page">
        <div className="myHeader">
         <HeaderComponent></HeaderComponent>
        </div>
        <Container className="details-page-outer-organizer">
          <Row className="details-page-inner-organizer">
            <Col className="col-8">
                <Container>
                  <Row className="dog-identification-container">
                    <DetailsComponent></DetailsComponent>
                  </Row>
                  <Row >
                    <div className="dog-video-container">
                      <VideoComponent></VideoComponent>
                    </div>
                  </Row>
                  <Row>
                    <div className="dog-story-container">
                      <h1 className="dog-story-header">My Story</h1>
                      <p className="dog-story">
                      Tala was alone and scared in the shelter. He was very shy and timid, and was afraid of everything and every one. As time progressed, his trust increased and he began to show his amazing personality! Tala proves that the misconceptions about shelter dogs are false, and that if given the right amount of patience and love, can transform into amazing friends.
                      </p>
                    </div>
                  </Row>
                </Container>
            </Col>
            <Col className="col-4 dog-booking-container">
                <Container>
                  <Row>
                      <Map dogId={this.props.match.params.dogId} className="dog-location-container">
                      </Map>
                  </Row>
                  <Row>
                    <DateTimeForm className="dog-calendar-container"></DateTimeForm>
                  </Row>
                  <Row>

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

                  </Row>
                </Container>
            </Col>
          </Row>
        </Container>
        <div className="myFooter">
          <FooterComponent></FooterComponent>
        </div>
      </div>
    );
  }
}
export default Details;
