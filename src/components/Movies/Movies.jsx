import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Details from '../Details/Details'



class Movies extends Component {

    // We want the lis of movies to be shown on the home page on page load, so let's go get them.
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_MOVIES'
        })
    }
    // This function makes a reducer with the information of the specific movie that was clicked
    movieDetail = (flick) => {
        this.props.dispatch({
            type: 'GET_GENRES',
            payload: flick
        })
        // this.props.dispatch({
        //     type: 'GET_GENRES',
        //     payload: flick.id
        // })
    }

    render() {
        return (
            <div>
                <ul className="HomePageLayout">
                {this.props.reduxStore.movies.map(flick =>
                    <li className="ListItemLayout" key={flick.id}>
                        <Link to="/details">
                        <img 
                        src={flick.poster} 
                        alt={flick.title} 
                        value={flick.id} 
                        onClick={(event) => this.movieDetail(flick)}/>
                        </Link>
                        <div className = "DescriptionBox" >
                        <h1>{flick.title}</h1>
                        <p><i>{flick.description}</i></p>
                        </div>
                    </li>
                )}
                </ul>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStateToProps)(Movies);


