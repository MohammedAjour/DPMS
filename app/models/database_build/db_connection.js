const {Pool} = require('pg');
const env = require('env2')('./config.env');
if (!process.env.DATABASE_URL) {
  throw new Error('No DATABASE_URL provided');
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: true});

module.exports = pool;
