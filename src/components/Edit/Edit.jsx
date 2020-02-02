import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
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
    }


    render() {
        return (
            <Router>
                <div className="center">
                    <ul className="editUL">
                      <li className="cancelButton"> <Link to="/details"> Cancel </Link></li>
                       <li className="editLI"> <Link onClick={this.sendDetails} to="/details"> Save </Link> </li>
                    </ul>
                </div>
                <div className="editPage">
                    <Route exact path="/details" component={Details} />
                    <div>
                        <textarea
                            className="editTitle"
                            // placeholder={this.props.reduxStore.details.title}
                            onChange={(event) => this.setDetails(event, 'title')}>
                        {this.props.reduxStore.details.title}</textarea>
                        <br></br>
                        <textarea className="textArea"
                            // value={this.props.reduxStore.details.description}
                            // placeholder={this.props.reduxStore.details.description}
                            onChange={(event) => this.setDetails(event, 'description')}
                        >{this.props.reduxStore.details.description}</textarea>
                    </div>
                    <h1>Genres this movie belongs to:</h1>
                    <ul className="genresUL">
                        {this.props.reduxStore.genres.map(genre =>
                            <li className="genresLI" key={genre.name}>{genre.name}</li>
                        )}
                    </ul>
                </div>
            </Router >
        )

    }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})


export default (connect(mapReduxStateToProps)(Edit));