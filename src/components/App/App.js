import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Movies from '../Movies/Movies.jsx'
import Details from '../Details/Details'

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div>
        <h1>Movies</h1>
          <div>
            <Route exact path="/" component={Movies}  />
            <Route exact path="/edit" component={Details} />
          </div>
      </div>
      </Router>
    );
  }
}

export default connect()(App);
