const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all the movies

router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "movies";'
    pool.query(queryText)
    .then( result => {
        res.send(result.rows)
    }).catch( e => {
        res.sendStatus(500);
    })
})

module.exports = router;