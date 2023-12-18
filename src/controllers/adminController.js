const path = require('path');
const data = require( path.join(__dirname, '../data.js') );
const isAdmin = true;

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
    editView: (req, res) => res.render(path.join(__dirname, '../views/admin/edit.ejs'), {
        title: "Editar",
        isAdmin
    }),
    editItem: (req, res) => res.send('admin editPut route'),
    deleteItem: (req, res) => res.send('admin delete route')
}

module.exports = adminControllers;