const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'prod_unisalva',
    password: 123456
  });

export default connection;