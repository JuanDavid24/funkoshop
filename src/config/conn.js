const mysql = require('mysql2');

const connection = mysql.createPool({
    user: 'root',
    password : 'elpsykongroo24',
    host: 'localhost',
    port: 3306,
    database: 'funko_schema',
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