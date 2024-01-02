const { log } = require('console');
const path = require('path')
const data = require( path.join(__dirname, '../data.json') );
const isAdmin = false;

const shopControllers = {
    shopView: (req, res) =>  {
        let collection = req.query.collection ? req.query.collection : "";
        let shopData = collection ? data.filter( item => item.licence_name.toLowerCase() == collection ) : data;
        res.render(path.join(__dirname, '../views/shop/shop.ejs'), {
        title: "Shop",
        isAdmin, 
        shopData       
    })},

    itemView: (req, res) => {
        const itemId = req.params.id;
        const item = data.find( element => element.product_id == itemId );
        const relatedItems = data.filter( element => element.licence_name == item.licence_name );
        res.render(path.join(__dirname, '../views/shop/item.ejs'), {
            title: "Item",
            isAdmin,
            item,
            relatedItems,
            isAdmin
        })
    },

    addItem: (req, res) => res.send('addItem route'),
    cartView: (req, res) => {
        //carrito de ejemplo
        const cart = [
            {"product_id": 2, "quantity": 5},
            {"product_id": 5, "quantity": 4}
        ]
        res.render(path.join(__dirname, '../views/shop/cart.ejs'), {
            title: "Carrito",
            isAdmin,
            data,
            cart
        })
    },

    addToCart: (req, res) => res.send('addToCart route')
}

module.exports = shopControllers;