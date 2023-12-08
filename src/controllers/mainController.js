const mainControllers = {
    home: (req, res) => res.send('home route'),
    contact: (req, res) => res.send('contact route'),
    about: (req, res) => res.send('about route'),
    faqs: (req, res) => res.send('faqs route')
}

module.exports = mainControllers;