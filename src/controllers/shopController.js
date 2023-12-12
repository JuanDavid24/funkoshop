const path = require('path')

const shopControllers = {
    shopView: (req, res) => res.render(path.join(__dirname, '../views/shop/shop.ejs'), {
        title: "Shop"
    }),
    itemView: (req, res) => res.render(path.join(__dirname, '../views/shop/item.ejs'), {
        title: "Item"
    }),
    addItem: (req, res) => res.send('addItem route'),
    cartView: (req, res) => res.render(path.join(__dirname, '../views/shop/cart.ejs'), {
        title: "Carrito"
    }),
    addToCart: (req, res) => res.send('addToCart route')
}

module.exports = shopControllers;