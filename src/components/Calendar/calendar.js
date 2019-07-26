import React from 'react';
import { DateTimeInput } from 'semantic-ui-calendar-react';
import { Form, ButtonToolbar, Button } from 'react-bootstrap';

class DateTimeForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        dateTime: null
      };
    }
    
    handleChange = (event, {name, value}) => {
      if (this.state.hasOwnProperty(name)) {
        this.setState({ [name]: value });
      }
    }

    render() {
      return (
          <Form className="myCalendar">
            {this.state.dateTime ? this.renderAppointment() : null }
            <DateTimeInput
              inline
              name="dateTime"
              placeholder="Date Time"
              value={this.state.dateTime}
              iconPosition="left"
              onChange={this.handleChange}
            />
          </Form>
      );
    }

    renderAppointment(){
      return (
        <div className="calendar-appointment">
          <h1 className="appointment-time">{this.state.dateTime}</h1>
          <ButtonToolbar>
            <Button variant="outline-danger" size="lg" block onClick={()=> this.setState({dateTime: null})}> R E S E T </Button>
          </ButtonToolbar>
        </div>
      )
    }


  }

  export default DateTimeForm;