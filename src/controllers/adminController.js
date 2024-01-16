const { log } = require('console');
const path = require('path');
const { getAll, getOne, create, deleteOne, editOne } = require('../models/productModel');
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
        console.log("item creado: ", newItem.product_name, "\n", result);
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
        const { id } = req.params;
        const files = req.files;
        console.log(formData)
        console.log(files)
        const editedItem = {
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
        const columns = Array.from(Object.keys(editedItem));
        const values = Array.from(Object.values(editedItem));
        const result = await editOne(columns, values, id);
        console.log(result);
        res.redirect('/admin');
    },
    deleteItem: async (req, res) => {
        const { id } = req.params;
        console.log (await deleteOne( {product_id: id}))
        res.redirect('/admin');
    }
}

module.exports = adminControllers;