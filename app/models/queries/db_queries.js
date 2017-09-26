const dbConnection = require('../database_build/db_connection.js');
exports.signUpNewUser = (user, getStatus) => {
  const sql = {
    text: 'INSERT INTO users (username , password ,email,address) VALUES ($1 , $2 ,$3 ,$4) RETURNING *',
    values: [ user.username, user.password, user.email, user.address ]
  };
  dbConnection.query(sql, (err, res) => {
    if (err) return getStatus(err);
    getStatus(null, res.rows[0]);
  });
};

exports.isUser = (email, exist) => {
  const sql = {
    text: 'SELECT * FROM users WHERE email = $1',
    values: [ email ]
  };
  dbConnection.query(sql, (err, result) => {
    if (err) {
      exist(err);
    } else {
      exist(null, result.rows[0]);
    }
  });
};
// exports.checkUser = (user, exist) => {
//   const sql = {
//     text: 'SELECT email ,username FROM users WHERE email = $1',
//     values: [ user.email, user.username ]
//   };
//   dbConnection.query(sql, exist);
// };
exports.findCustomer = (searchKey, userID, getList) => {
  const sql = {
    text: `SELECT * FROM customers WHERE customername LIKE ${searchKey}% AND user_id = ${userID}`
  };

  dbConnection.query(sql, getList);
};
