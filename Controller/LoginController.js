const User = require('../Models/User');

exports.loginPage = (req, res) => {
    res.render('login'); // Affiche la vue login.ejs
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Recherche de l'utilisateur dans la base de données
        const user1 = await User.findOne({ email });
        if (!user1) {
            return res.render('login', { error: 'Invalid email or password' });
        }

        // Vérification du mot de passe
        if (user1.password !== password) {
            return res.render('login', { error: 'Invalid email or password' });
        }

        // Création de la session utilisateur
        req.session.user = user1;

        // Redirection basée sur le rôle de l'utilisateur
        if (user1.role === 'admin') {
            return res.redirect('/Users');
        } else if (user1.role === 'client') {
            return res.redirect('/Products?view=shoping');
        } else {
            return res.render('login', { error: 'Role not recognized.' });
        }
    } catch (error) {
        console.error('Login error:', error.message);
        return res.render('login', { error: 'An error occurred. Please try again.' });
    }
};
