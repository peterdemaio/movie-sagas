const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all the movies

// router.get('/', (req, res) => {
//     const queryText = 'SELECT * FROM "movies";'
//     pool.query(queryText)
//     .then( result => {
//         res.send(result.rows)
//     }).catch( e => {
//         res.sendStatus(500);
//     })
// })

// update the selected movie with the new title and description
router.get('/', (req, res) => {
    console.log('ready to get genres:', req.query.id)
    id = req.query.id;
    let sqlText  = `SELECT "movies".title, "genres".name from "movies"
                    JOIN "movies_genres" on "movies".id = "movies_genres".movies_id
                    JOIN "genres" on "movies_genres".genres_id = "genres".id
                    WHERE "movies".id = $1;`
    pool.query(sqlText, [id])
    .then(result => {
        console.log(result.rows)
        res.send(result.rows)
    })
    .catch((err) => {
        console.log('Error updating movie', err);
        res.sendStatus(500);
    })
})

module.exports = router;