const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    stock: { type: Number, default: 0 },
    details: {
        material: String,
        dimensions: String,
        color: String
    },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('products', productSchema); 