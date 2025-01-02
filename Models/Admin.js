
const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter the name']
    },
    email: {
        type: String,
        required: [true, 'Please enter the email'],
        unique: true
    },
    role: {
        type: String,
        required: [true, 'Please enter the role']
    },
    password: {
        type: String,
        required: true
    }
});

// Middleware pour hacher le mot de passe avant de sauvegarder
//adminSchema.pre('save', async function (next) {
  //  if (this.isModified('password')) {
   //     this.password = await bcrypt.hash(this.password, 10);
   // }
   // next();
//});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
