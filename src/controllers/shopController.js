const path = require('path')

const data = [     
    {
    product_id: 1,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/pokemon/pidgeotto-1.webp",
    img_back: "/img/pokemon/pidgeotto-box.webp"
    },
    {
    product_id: 2,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Charmander",
    product_description: "Figura coleccionable pokemon",
    product_price: 2299.99,
    dues: 6,
    product_sku: "PKM001002",
    img_front: "/img/pokemon/charmander-1.webp",
    img_back: "/img/pokemon/charmander-box.webp"
    },
    {
    product_id: 3,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pikachu",
    product_description: "Figura coleccionable pokemon",
    product_price: 2699.99,
    dues: 12,
    product_sku: "PKM001003",
    img_front: "/img/pokemon/pikachu-1.webp",
    img_back: "/img/pokemon/pikachu-box.webp"
    },
    {
    product_id: 4,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Vulpix",
    product_description: "Figura coleccionable pokemon",
    product_price: 2799.99,
    dues: 9,
    product_sku: "PKM001004",
    img_front: "/img/pokemon/vulpix-1.webp",
    img_back: "/img/pokemon/vulpix-box.webp"
    },
    {
    product_id: 1,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/pokemon/pidgeotto-1.webp",
    img_back: "/img/pokemon/pidgeotto-box.webp"
    },
    {
    product_id: 1,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/pokemon/pidgeotto-1.webp",
    img_back: "/img/pokemon/pidgeotto-box.webp"
    },
    {
    product_id: 1,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/pokemon/pidgeotto-1.webp",
    img_back: "/img/pokemon/pidgeotto-box.webp"
    },
    {
    product_id: 1,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/pokemon/pidgeotto-1.webp",
    img_back: "/img/pokemon/pidgeotto-box.webp"
    },
    {
    product_id: 1,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/pokemon/pidgeotto-1.webp",
    img_back: "/img/pokemon/pidgeotto-box.webp"
    },
]

const shopControllers = {
    shopView: (req, res) =>  {
        res.render(path.join(__dirname, '../views/shop/shop.ejs'), {
        title: "Shop",  
        data     
    })},

    itemView: (req, res) => {
        const itemId = req.params.id;
        const item = data.find( element => element.product_id == itemId );
        res.render(path.join(__dirname, '../views/shop/item.ejs'), {
            title: "Item",
            item
        })
    },

    addItem: (req, res) => res.send('addItem route'),
    cartView: (req, res) => res.render(path.join(__dirname, '../views/shop/cart.ejs'), {
        title: "Carrito"
    }),

    addToCart: (req, res) => res.send('addToCart route')
}

module.exports = shopControllers;