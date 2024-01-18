const { conn } = require ('../config/conn');

const getUserByEmail = async (param) => {
    try {
        const [data] = await conn.query('SELECT * from user WHERE email = ?;', param);
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

module.exports = { getUserByEmail }