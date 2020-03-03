const express = require("express");

const router = express.Router();

const getData = require('../database/queries/getCities')
const addCity = require('../database/queries/addCity')

router.get('/cities', (req, res) => {
  getData()
    .then((result) => res.json(result.rows))
    .catch(console.error)
})

router.post('/add-city', (req, res) => {
  addCity(req.body)
    .then(() => res.redirect('/'))
    .catch(console.error);
})

module.exports = router;
