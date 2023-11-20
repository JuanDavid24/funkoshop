const authControllers = {
    loginGet: (req, res) => res.send('Login GET route'),
    loginPost: (req, res) => res.send('login POST route'),
    registerGet: (req, res) => res.send('register GET route'),
    registerPost: (req, res) => res.send('register POST route'),
    logout: (req, res) => res.send('logout route')
}

module.exports = authControllers;