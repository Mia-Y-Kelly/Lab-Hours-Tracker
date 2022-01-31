import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


// Server test
mysql = require('mysql');
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password:"mysql",
//     database: "hoursdb"
// })

// connection.connect()

// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

// connection.end()