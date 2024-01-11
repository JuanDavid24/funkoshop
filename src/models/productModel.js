const { conn } = require ('../config/conn');

const getAll = async () => {
    try {
        const [data] = await conn.query('SELECT * FROM product;');
        return data;
    } 
    catch (error) {
        return {
            error: true,
            message: 'Se produjo un error al realizar la consulta: ' + error
        }
    }
    finally {
        conn.releaseConnection();}
}

module.exports = { getAll }