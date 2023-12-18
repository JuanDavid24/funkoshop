const path = require('path');
const isAdmin = true;

const authControllers = {
    loginView: (req, res) => res.render(path.join(__dirname, '../views/auth/login.ejs'), {
        title: "Login",
        isAdmin
    }),
    sendLoginData: (req, res) => res.send('login POST route'),
    registerView: (req, res) => res.render(path.join(__dirname, '../views/auth/register.ejs'), {
        title: "Registrarse",
        isAdmin
    }),
    sendRegisterData: (req, res) => res.send('register POST route'),
    logout: (req, res) => res.send('Logout route'),
}

module.exports = authControllers;