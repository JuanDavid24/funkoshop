const path = require('path');
const data = require( path.join(__dirname, '../data.js') );
const isAdmin = true;
const categories = ["Figuras coleccionables", "Llaveros", "Remeras"];
const licences = ["Pokemon", "Harry Potter", "Star Wars"];
const dues = [3, 6, 9, 12, 18, 24];
    
    const adminControllers = {
    adminView: (req, res) => res.render(path.join(__dirname, '../views/admin/admin.ejs'), {
        title: "Admin",
        isAdmin,
        data
    }),
    createView: (req, res) => res.render(path.join(__dirname, '../views/admin/create.ejs'), {
        title: "Crear",
        isAdmin
    }),
    createItem: (req, res) => res.send('admin createPost route'),
    editView: (req, res) => {
        const itemId = req.params.id;
        const item = data.find( element => element.product_id == itemId );

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