const path = require('path');
const isAdmin = true;

const credentials = {
    email: 'pikachu@pokemon.com',
    password: 'pikapika123'
}

const authControllers = {
    loginView: (req, res) => res.render(path.join(__dirname, '../views/auth/login.ejs'), {
        title: "Login",
        isAdmin
    }),
    doLogin: (req, res) => {
        const { email, password } = req.body;
        const validateEmail = credentials.email == email;
        const validatePassword = credentials.password == password;

        req.session.isLogged = (validateEmail && validatePassword) ? true : false;

        if (req.session.isLogged) {
            res.locals.isLogged = true;
            return res.redirect('/admin');
        }

        res.status(401).send('Credenciales inválidas');
    },
    registerView: (req, res) => res.render(path.join(__dirname, '../views/auth/register.ejs'), {
        title: "Registrarse",
        isAdmin
    }),
    doRegister: (req, res) => res.send('register POST route'),
    logout: (req, res) => res.send('Logout route'),
}

module.exports = authControllers;