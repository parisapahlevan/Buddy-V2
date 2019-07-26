
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import RealDataBase from '../../RealDataBase';
class SearchComponent extends React.Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  static defaultProps = {
    suggestions: []
  };

  constructor(props) {
    super(props);

    this.state = {

      userInput: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }


  onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );


    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };


  onClick = e => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul class="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li
                  className={className}
                  key={suggestion}
                  onClick={onClick}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div class="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }

    return (
      <div>
      <div className="search-container">
      <h1>{this.props.children}</h1>
      {this.state.text}
          <p>Find buddies in your neighborhood</p>
      </div>
      <div className="search-box">
          <InputGroup className="mb-3">
              <i className="fas fa-map-marker-alt icon" aria-hidden="true"></i>
              <FormControl onChange={this.handleChange} className="input"
                  placeholder="zip code"
                  aria-label="zip code"
                  aria-describedby="basic-addon2"
                  onChange={onChange}
              onKeyDown={onKeyDown}
              value={userInput}

              />
              <InputGroup.Append>
                  <Button onClick={this.handleClick} className="search-button" variant="outline-secondary" onClick={this.handleClick}><i className="fa fa-search"></i></Button>
              </InputGroup.Append>                        
          </InputGroup>
          {suggestionsListComponent}

      </div>
      
      </div>
    )
  }
  

  handleClick() {
    RealDataBase.currentZip = this.state.userInput
    this.props.history.push('/dogs');
  }

}
const inputGroupStyle = {
  width: '200px',
  margin: ' 0 auto',
  float: 'none'
}

export default withRouter(SearchComponent);


