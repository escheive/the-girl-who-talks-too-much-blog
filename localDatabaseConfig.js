// localDatabaseConfig.js
const pgp = require('pg-promise')();

const db = pgp({
  user: 'escheive',
  password: 'daisy11',
  host: 'localhost',
  port: 5432, // PostgreSQL default port
  database: 'thegirlwhotalkstoomuch',
});

module.exports = db;