const adminControllers = {
    admin: (req, res) => res.send('admin route'),
    createGet: (req, res) => res.send('admin createGet route'),
    createPost: (req, res) => res.send('admin createPost route'),
    editGet: (req, res) => res.send('admin editGet route'),
    editPut: (req, res) => res.send('admin editPut route'),
    delete: (req, res) => res.send('admin delete route')
}

module.exports = adminControllers;