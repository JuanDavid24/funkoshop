const path = require('path')
const dataJSON = require( path.join(__dirname, '../data.json') );
const { getAll } = require('../models/licenceModel');
const isAdmin = false;

const mainControllers = {
    homeView: async (req, res) => {
        const newItems = dataJSON.slice( dataJSON.length - 3 );
        const licences = await getAll();
        console.log(licences);
        res.render('index', {
            title: "Home",
            newItems,
            licences,
            isAdmin
        });
    },
    contactView: (req, res) => res.send('contact route'),
    aboutView: (req, res) => res.send('about route'),
    faqsView: (req, res) => res.send('faqs route')
}

module.exports = mainControllers;