const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter the name']
    },
    price: {
        type: Number, // Ou Schema.Types.Decimal128 si précision accrue nécessaire
        required: [true, 'Please enter the price'],
    },
    description: {
        type: String,
        required: [true, 'Please enter the description']
    },
    image: {
        type: String, // URL ou chemin vers l'image
    }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
