import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Movies from '../Movies/Movies'
import Edit from '../Edit/Edit'

class Details extends Component {

    render() {

        return (
            <Router>
                <Link to="/"> Back to List </Link>
                <Link to="/edit"> Edit </Link>
                <div>
                    <Route exact path="/" component={Movies} />
                    <Route exact path="/edit" component={Edit} />
                    <h1>{this.props.reduxStore.details.title}</h1>
                    <p>{this.props.reduxStore.details.description}</p>
                </div>
            </Router>
        )
    }
}


const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStateToProps)(Details);

