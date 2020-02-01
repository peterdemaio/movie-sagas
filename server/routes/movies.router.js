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

// update the selected movie with the new title and description
router.put('/:id', (req, res) => {
    console.log('ready to update movie:', req.params.id)
    let newTitle = req.body.title;
    let newDescription = req.body.description;
    id = req.body.id;
    let sqlText  = `UPDATE "movies" SET "title" = $1, "description" = $2 WHERE "id" = $3;`
    const queryValues = [
        newTitle,
        newDescription,
        id
    ];
    pool.query(sqlText, queryValues)
    .then(() => {res.sendStatus(201); })
    .catch((err) => {
        console.log('Error updating movie', err);
        res.sendStatus(500);
    })
})

module.exports = router;