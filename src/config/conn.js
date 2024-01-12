const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createPool({
    user: process.env.DBUSER,
    password : process.env.DBPASS,
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    database: process.env.DBSCHEMA,
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0
});

connection.getConnection( (err, conn) => {
    if (err)
        console.log('Error al conectarse a la base de datos: ' + err);
    else {
        console.log('Conexión exitosa a la base de datos');
        conn.release();
    }
});

module.exports = {
    conn: connection.promise()
};