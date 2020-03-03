const connection = require('../config/connection');

const addCity = (data) => connection
  .query('INSERT INTO cities (name, city) Values ($1, $2)', [data.name, data.city]);

module.exports = addCity