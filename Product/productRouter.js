const express = require('express')

const router = express.Router()

const productController = require('./productController')
const Product = require("./productModel")

router.post('/', async (req, res) => {
    try {
        const newProduct = new Product({...req.body})

        productController.saveProduct(newProduct, (err, result) => {
            if(err){
                res.status(400).send('Error while saving product', err)
            }
            else{
                res.status(200).send(result)
            }
        })
        
    } catch (error) {
        res.status(500).send('Internal server error', error)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const productId = req.params.id;

        productController.getProductById(Product, productId, (err, result) => {
            if(err){
                res.status(400).send('Error while saving product', err)
            }
            else{
                res.status(200).send(result)
            }
        })
        
    } catch (error) {
        res.status(500).send('Internal server error', error)
    }
});

module.exports = router;