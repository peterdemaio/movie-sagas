import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Movies from '../Movies/Movies'
import Details from '../Details/Details'


class Edit extends Component {

    state = {
        id: this.props.reduxStore.details.id,
        title: this.props.reduxStore.details.title,
        description: this.props.reduxStore.details.description
    }

    setDetails = (event, type) => {
        // This should update state with the details submitted
        this.setState({
            ...this.state,
            [type]: event.target.value
        })
        console.log('Ready to edit with', this.state)
    }

    sendDetails = () => {
        this.props.dispatch({
            type: 'EDIT_MOVIE',
            payload: this.state
        })
        this.goBack()
    }
    goBack = () => {
        this.props.dispatch({
            type: 'MOVIE_DETAILS_EDITED',
            payload: this.state
        })
        this.props.history.push('/details')
    }

    render() {
        return (
            <Router>
                <Link to="/details"> Cancel </Link>
                <button onClick={this.sendDetails}> Save </button>
                <div>
                    <Route exact path="/details" component={Details} />
                    <div>
                <input 
                placeholder="Edit Title"
                onChange={(event) => this.setDetails(event, 'title')}>
                </input>
                <br></br>
                <textarea 
                placeholder="Edit Description"
                onChange={(event) => this.setDetails(event, 'description')}
                ></textarea>
                </div>
                </div>
            </Router>
        )

    }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStateToProps)(Edit);