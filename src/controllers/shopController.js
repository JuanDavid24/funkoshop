const path = require('path')
const data = require( path.join(__dirname, '../data.json') );
const isAdmin = false;

const shopControllers = {
    shopView: (req, res) =>  {
        res.render(path.join(__dirname, '../views/shop/shop.ejs'), {
        title: "Shop",
        isAdmin,  
        data     
    })},

    itemView: (req, res) => {
        const url = req.url;
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
    cartView: (req, res) => res.render(path.join(__dirname, '../views/shop/cart.ejs'), {
        title: "Carrito",
        isAdmin
    }),

    addToCart: (req, res) => res.send('addToCart route')
}

module.exports = shopControllers;