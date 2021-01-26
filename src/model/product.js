const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    onSale: {
        type: Boolean,
        default: false
    },
    quantity: {
        type: Number,
        default: 0
    },
    reviews: [{
        review: {
            type: Number
        }
    }],
    colors: [{
        color: {
            type: String
        }
    }],
    sizes: [{
        size: {
            type: String
        }
    }],
    mainImage: {
        type: String,
    },
    images: [{
        image: {
            type: String
        }
    }],
    sku: {
        type: String,
        unique: true,
        trim: true,
        required: true
    }
})

const Product = mongoose.model('product', productSchema)

module.exports = Product