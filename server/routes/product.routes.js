const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');
const ObjectId = require('mongodb').ObjectId;


router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.send(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product === null) res.status(404).json({ message: 'Product has not found' });
        else {
            res.send(product);
        }
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
})



router.post('/', async (req, res) => {
    const product = new Product({
        title: req.body.title,
        description: req.body.description,
        imgs: req.body.imgs,
        category: req.body.category,
        type: req.body.type,
        material: req.body.material,
        color: req.body.color,
        price: req.body.price,
        numInStock: req.body.numInStock,
        reviews: req.body.reviews
    });
    try {
        const newProduct = await product.save();
        res.status(201).send(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});




router.delete('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    try {
        await product.remove();
        res.json({ message: 'Product has been deleted!' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});




// router.put('/:id', async (req, res) => {
//     const product = {
//         title: req.body.title,
//         description: req.body.description,
//         imgs: req.body.imgs,
//         category: req.body.category,
//         type: req.body.type,
//         material: req.body.material,
//         color: req.body.color,
//         price: req.body.price,
//         numInStock: req.body.numInStock,
//         reviews: req.body.reviews
//     }
//     try {
//         const updatedProduct = await product.save();
//         res.json(updatedProduct);
//     } catch (err) {
//         res.status(404).json({ message: err.message });
//     }
// });

router.put('/:id', async (req, res) => {
    const updatedProduct = req.body;
    let product = await Product.findByIdAndUpdate(req.params.id, updatedProduct);
    try {
        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
});


module.exports = router;
