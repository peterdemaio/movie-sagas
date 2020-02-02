import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Movies from '../Movies/Movies'
import Edit from '../Edit/Edit'

class Details extends Component {

    render() {

        return (
            <Router>
                <div className="center">
                    <ul className="editUL">
                        <li className="cancelButton"><Link to="/"> Back to List </Link></li>
                        <li className="editLI"><Link to="/edit"> Edit </Link></li>
                    </ul>
                </div>
                <div className="DescriptionBox">
                    <Route exact path="/" component={Movies} />
                    <Route exact path="/edit" component={Edit} />
                    <h1>{this.props.reduxStore.details.title}</h1>
                    <p><i>{this.props.reduxStore.details.description}</i></p>
                </div>
            </Router>
        )
    }
}


const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStateToProps)(Details);

