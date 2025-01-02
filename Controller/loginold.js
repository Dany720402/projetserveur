const Admin = require('../Models/Admin');
//const bcrypt = require('bcrypt');

exports.loginPage = (req, res) => {
    res.render('login'); // Affiche la vue login.ejs
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Recherche de l'utilisateur dans la base de données
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.render('login', { error: 'Invalid email or password' });
        }

        // Vérification du mot de passe
       // const isMatch = await bcrypt.compare(password, admin.password);
       const isMatch = await Admin.findOne({ password });
        if (!isMatch) {
            return res.render('login', { error: 'Invalid email or password' });
        }

        // Création de la session utilisateur
        req.session.user = admin;

        // Redirection après connexion réussie
        //return res.redirect('/Admin');
        return res.redirect('/Users');
    } catch (error) {
        console.error('Login error:', error.message);
        return res.render('login', { error: 'An error occurred. Please try again.' });
    }
};
