const { log } = require('console');
const path = require('path');
const { getAll, getOne, create } = require('../models/productModel');
const isAdmin = true;
const categories = [{1: "Figuras coleccionables"}, {2: "Llaveros"}, {3: "Remeras"}];
const licences = [{1: "Star Wars"}, {2: "Pokémon Indigo"}, {3: "Harry Potter"}];
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
    createView: (req, res) => {     
        res.render(path.join(__dirname, '../views/admin/create.ejs'), {
            title: "Crear",
            isAdmin,
            categories,
            licences 
        })
    },
    createItem: async (req, res) => {
        const formData = req.body;
        const files = req.files;
        const newItem = {
            product_name: formData.name,
            product_description: formData.description,
            price: formData.price,
            stock: formData.stock,
            discount: formData.discount,
            dues: formData.dues,
            sku: formData.sku,
            image_front: `/img/${formData.licence}/${files[0].filename}`,
            image_back: `/img/${formData.licence}/${files[1].filename}`,
            category_id: formData.category,
            licence_id: formData.licence
        }
        const arrayItem = [ Object.values(newItem) ]
        const result = await create( arrayItem );
        log (`item creado: ${newItem.product_name}
             ${result}`);
        res.send(`item creado: ${newItem.product_name}`)
        res.redirect('/admin');
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
    editItem: async (req, res) => {
        const formData = req.body;
        const files = req.files;
        const newItem = {
            product_name: formData.name,
            product_description: formData.description,
            price: formData.price,
            stock: formData.stock,
            discount: formData.discount,
            dues: formData.dues,
            sku: formData.sku,
            image_front: `/img/${formData.licence}/${files[0].filename}`,
            image_back: `/img/${formData.licence}/${files[1].filename}`,
            category_id: formData.category,
            licence_id: formData.licence
        }
        res.redirect('/admin');
    },
    deleteItem: (req, res) => res.send('admin delete route')
}

module.exports = adminControllers;