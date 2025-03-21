const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product', // Référence au modèle Product
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    }
});

const CartItem = mongoose.model('CartItem', cartItemSchema);
module.exports = CartItem;