import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put} from 'redux-saga/effects'
import axios from 'axios';


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery ('GET_MOVIES', getMovies)
    yield takeEvery ('EDIT_MOVIE', editMovie)
}

// Get the movies from the server with axios using a generator function/saga
function* getMovies(action) {
    let response = yield axios.get('/api/movies')
    console.log(response.data)
    yield put ({type: 'SET_MOVIES', payload: response.data})
}

function* editMovie(action) {
    console.log(action.payload.id)
    let id = action.payload.id
    let response = yield axios.put(`/api/movies/:${id}`, action.payload)
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


// this reducer remembers which movie the person clicked on for the details page
const details = (state = {}, action) => {
    switch (action.type) {
        case 'MOVIE_DETAIL':
            return action.payload;
        case 'MOVIE_DETAILS_EDITED':
            return action.payload;
        default: 
            return state;
    }
}
// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
