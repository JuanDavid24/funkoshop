const path = require('path');

const adminControllers = {
    adminView: (req, res) => res.render(path.join(__dirname, '../views/admin/admin.ejs'), {
        title: "Admin"
    }),
    createView: (req, res) => res.render(path.join(__dirname, '../views/admin/create.ejs'), {
        title: "Crear"
    }),
    createItem: (req, res) => res.send('admin createPost route'),
    editView: (req, res) => res.render(path.join(__dirname, '../views/admin/edit.ejs'), {
        title: "Editar"
    }),
    editItem: (req, res) => res.send('admin editPut route'),
    deleteItem: (req, res) => res.send('admin delete route')
}

module.exports = adminControllers;