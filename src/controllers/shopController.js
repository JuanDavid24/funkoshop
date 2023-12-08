const shopControllers = {
    shop: (req, res) => res.send('shop route'),
    item: (req, res) => res.send('item route'),
    itemAdd: (req, res) => res.send('itemAdd route'),
    cart: (req, res) => res.send('cart route'),
    cartAdd: (req, res) => res.send('cartAdd route')
}

module.exports = shopControllers;