const path = require('path')
const data = require( path.join(__dirname, '../data.js') );

const mainControllers = {
    homeView: (req, res) => {
        const newItems = data.slice( data.length - 3 );
        res.render('index', {
            title: "Home",
            newItems
        });
    },
    contactView: (req, res) => res.send('contact route'),
    aboutView: (req, res) => res.send('about route'),
    faqsView: (req, res) => res.send('faqs route')
}

module.exports = mainControllers;