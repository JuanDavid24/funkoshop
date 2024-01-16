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

const create = async (values) => {
    try {
        const [product] = await conn.query('INSERT INTO product ( product_name, product_description, price, stock, discount, dues, sku, image_front, image_back, category_id, licence_id) VALUES ?;', [values]);
        return product;
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

const editOne = async (params, product_id) => {
    try {
        const [product] = await conn.query('UPDATE product SET ? WHERE ?', [params, product_id]);
        return product;
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

const deleteOne = async (params) => {
    try {
        const [data] = await conn.query('DELETE FROM product WHERE ?;', params);
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

module.exports = { getAll, getOne, create, editOne, deleteOne }