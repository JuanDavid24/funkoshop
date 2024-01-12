const { log } = require('console');
const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data.json')
const { getAll, getOne } = require('../models/productModel');
const isAdmin = true;
const categories = ["Figuras coleccionables", "Llaveros", "Remeras"];
const licences = ["Pokémon Indigo", "Harry Potter", "Star Wars"];
const dues = [3, 6, 9, 12, 18, 24];
    
    const adminControllers = {
    adminView: async (req, res) => {
        const data = await getAll();
        res.render(path.join(__dirname, '../views/admin/admin.ejs'), {
            title: "Admin",
            isAdmin,
            data
        })
    },
    createView: (req, res) => res.render(path.join(__dirname, '../views/admin/create.ejs'), {
        title: "Crear",
        isAdmin
    }),
    createItem: (req, res) => {
        const formData = req.body;
        const files = req.files;
        const database = JSON.parse(fs.readFileSync(dataPath))
        const newItem = {
            product_id: database.length + 1,
            licence_name: formData.collection.replace(/-/g, " "),
            category_name: formData.category,
            product_name: formData.name,
            product_description: formData.description,
            product_price: formData.price,
            dues: formData.dues,
            product_sku: formData.sku,
            img_front: `/img/${formData.collection}/${files[0].filename}`,
            img_back: `/img/${formData.collection}/${files[1].filename}`
        }
        database.push(newItem);
        fs.writeFileSync(dataPath, JSON.stringify(database, null, ' '));
        res.send(`item creado: ${newItem.product_name}`)

        log(req.files[0]);
        log("newItem " + JSON.stringify(newItem));
        log("database " + JSON.stringify(database));

    },
    editView: async (req, res) => {
        const { id } = req.params;
        const [item] = await getOne(id);
        console.log(item);
        res.render(path.join(__dirname, '../views/admin/edit.ejs'), {
            title: "Editar",
            isAdmin,
            item,
            categories,
            licences,
            dues
    })},
    editItem: (req, res) => res.send('admin editPut route'),
    deleteItem: (req, res) => res.send('admin delete route')
}

module.exports = adminControllers;