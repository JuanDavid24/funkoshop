const path = require('path');
const { getUserByEmail }  = require ('../models/userModel')
const isAdmin = true;

const authControllers = {
    loginView: (req, res) => res.render(path.join(__dirname, '../views/auth/login.ejs'), {
        title: "Login",
        isAdmin,
        messages: req.flash('error')
    }),
    doLogin: async (req, res) => {
        const { email, password } = req.body;
        
        try {        
            const [credentialsDB] = await getUserByEmail(email);
            const validEmail = credentialsDB ? credentialsDB.email == email : false;
            const validPassword = credentialsDB ? credentialsDB.password == password : false;
            req.session.isLogged = (validEmail && validPassword) ? true : false;     

            if (!validEmail) {
                req.flash('error', 'Usuario no encontrado');
                return res.redirect('/auth/login');
            }
            if (!validPassword) {
                req.flash('error', 'Contraseña incorrecta');
                return res.redirect('/auth/login');
            }
            // Login ok
            res.locals.isLogged = true;
            return res.redirect('/admin');    
            
        } catch (error) {
            console.error('Error al verificar credenciales:', error);
            req.flash('error', 'Error en el servidor');
            res.redirect('/login');
        } finally {
            // Limpiar la lista de mensajes flash después de cada solicitud
            req.flash('error', '');
        }
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