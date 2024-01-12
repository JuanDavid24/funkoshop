const { conn } = require ('../config/conn');

const getAll = async () => {
    try {
        const [data] = await conn.query('SELECT product.*, licence.licence_name, category.category_name from (product LEFT JOIN licence ON product.licence_id = licence.licence_id) LEFT JOIN category ON product.category_id = category.category_id ;;');
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

const getOne = async (param) => {
    try {
        const [data] = await conn.query('SELECT product.*, licence.licence_name, category.category_name from (product LEFT JOIN licence ON product.licence_id = licence.licence_id) LEFT JOIN category ON product.category_id = category.category_id WHERE ?;', param);
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

module.exports = { getAll, getOne }