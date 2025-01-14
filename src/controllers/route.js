const router = require('express').Router()
const Chivia = require('../chivia')

router.get('/', (req, res) => {
    let from = req.query.from.split(',').map(i => +i)
    let to = req.query.to.split(',').map(i => +i)

    Chivia
        .route
        .findShortest(from, to)
        .then(route => {
            res.send(route)
        })
        .catch(err => {
            res.status(500).send(err)
        })
})

module.exports = router