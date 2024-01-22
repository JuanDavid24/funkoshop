const path = require('path');
const { getUserByEmail }  = require ('../models/userModel')
const isAdmin = true;

const authControllers = {
    loginView: (req, res) => res.render(path.join(__dirname, '../views/auth/login.ejs'), {
        title: "Login",
        isAdmin
    }),
    doLogin: async (req, res) => {
        const { email, password } = req.body;
        const [credentials] = await getUserByEmail(email);
        if (credentials) {
            const validateEmail = credentials.email == email;
            const validatePassword = credentials.password == password;
            req.session.isLogged = (validateEmail && validatePassword) ? true : false;
    
            if (req.session.isLogged) {
                res.locals.isLogged = true;
                return res.redirect('/admin');
            }
    
            res.status(401).send('Credenciales inválidas');
        } else 
            res.status(404).send('El correo del usuario ingresado no existe');
    },
    registerView: (req, res) => res.render(path.join(__dirname, '../views/auth/register.ejs'), {
        title: "Registrarse",
        isAdmin
    }),
    doRegister: (req, res) => res.send('register POST route'),
    logout: (req, res) => {
        req.session = null;
        res.send('Has cerrado sesión correctamente');
    }
}

module.exports = authControllers;