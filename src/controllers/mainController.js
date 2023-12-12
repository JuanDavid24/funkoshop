const mainControllers = {
    homeView: (req, res) => {
        res.render('index', {
            title: "Home"
        });
    },
    contactView: (req, res) => res.send('contact route'),
    aboutView: (req, res) => res.send('about route'),
    faqsView: (req, res) => res.send('faqs route')
}

module.exports = mainControllers;