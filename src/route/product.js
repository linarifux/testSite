const express = require('express')
const Product = require('../model/product')

const router = express.Router()

// creating product
router.post('/api/products', async (req,res) => {
    try{
        const product = new Product(req.body)
        await product.save()
        res.status(201).send(product)
    }catch(e){
        res.status(400).send(e)
    }
})

// reading all the products
router.get('/api/products', async (req,res) => {
    try{
        const products = await Product.find({},{title: 1, price: 1, mainImage: 1, _id: 0})
        if(products.length === 0){
            return res.status(404).send('No products')
        }
        res.status(200).send(products)
    }catch(e){
        res.status(400).send(e)
    }
})

// reading a product by id
router.get('/api/products/:id', async (req,res) => {
    try{
        const product = await Product.findById(req.params.id, {_id: 0, __v: 0})
        if(!product){
            return res.status(404).send("Not found!")
        }
        res.status(200).send(product)
    }catch(e){
        res.status(400).send(e)
    }
})


module.exports = router