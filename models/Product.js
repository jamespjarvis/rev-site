const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = Schema({
    name: String,
    stock: Number,
    price: Number,
    title: String,
    subtitle: String,
    details: [String],
    dimensions: {
        x: Number,
        y: Number,
        z: Number
    },
    additional: String,
    colors: [{
        color: String,
        buffer: Buffer
    }]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
