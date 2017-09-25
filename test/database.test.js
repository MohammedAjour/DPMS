const connection = require('../app/models/database_build/db_connection.js');
const test = require('tape');

test('Testing database connection', (t) => {
  const sql = '';
  connection.query(sql, (err, res) => {
    if (err) {
      t.notOk(!err, err);
      t.end();
    } else {
      t.equal(res != null, true, 'Should not be empty');
      t.end();
    }
  });
});

test('Testing queries on the database', (t) => {
  const sql = 'SELECT * FROM users';
  connection.query(sql, (err, res) => {
    if (err) {
      t.notOk(!err, err);
      t.end();
    } else {
      t.equal(res.rows.length > 0, true, 'Should not be empty');
      t.end();
    }
  });
});

test('Testing customers with user_id = 2', (t) => {
  const sql = 'SELECT * FROM customers WHERE user_id = 2 ';
  connection.query(sql, (err, res) => {
    if (err) {
      t.notOk(!err, err);
      t.end();
    } else {
      t.equal(res.rows.length > 0, true, 'Should not be empty');
      t.end();
    }
  });
});

test('Testing queries on the database', (t) => {
  const sql = 'SELECT * FROM debts';
  connection.query(sql, (err, res) => {
    if (err) {
      t.notOk(!err, err);
      t.end();
    } else {
      t.equal(res.rows.length, 5, 'Should not be empty');
      t.end();
    }
  });
});
