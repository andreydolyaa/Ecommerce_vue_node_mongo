const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    imgs: {
        type: Array
    },
    category: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    numInStock: {
        type: Number,
        required: true
    },
    reviews:{
        type:Array
    }

});



module.exports = mongoose.model('Product', productSchema);