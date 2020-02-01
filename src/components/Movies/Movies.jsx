import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


class Movies extends Component {

    // We want the lis of movies to be shown on the home page on page load, so let's go get them.
    componentDidMount() {
        this.getMovies()
    }
    // This functions dispatches an action to get the movies which will be heard over on the index.jsx
    getMovies = () => {
        this.props.dispatch({
            type: 'GET_MOVIES'
        })
    }
    // This function makes a reducer with the information of the specific movie that was clicked
    movieDetail = (flick) => {
        console.log(flick)
        this.props.dispatch({
            type: 'MOVIE_DETAIL',
            payload: flick
        })
    }

    render() {
        return (
            <div>
                <h1>Movies list</h1>
                {this.props.reduxStore.movies.map(flick =>
                    <li>
                        <Link to="/edit">
                        <img 
                        src={flick.poster} 
                        alt={flick.title} 
                        value={flick.id} 
                        onClick={(event) => this.movieDetail(flick)}/>
                        </Link>
                        <h3>{flick.title}</h3>
                        <p>{flick.description}</p>
                    </li>
                )}
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStateToProps)(Movies);


