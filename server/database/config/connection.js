require('env2')('./config.env');
const { Pool } = require('pg');

let dbUrl = '';

if (process.env.NODE_ENV === 'test') {
  dbUrl = process.env.DB_URL_TEST;
} else if (process.env.NODE_ENV === 'development') {
  dbUrl = process.env.DB_URL_DEV;
} else {
  dbUrl = process.env.DATABASE_URL;
}

if (!dbUrl) throw new Error('NO DATABASE URL!')

const option = {
  connectionString: dbUrl,
  ssl: true
}

module.exports = new Pool(option)