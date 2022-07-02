const express = require('express')

const router = express.Router()

const mongoose = require('mongoose')

const axios = require('axios')

require('../dbconfig/dbfile')

const Order = require('./orderModel')

router.post('/', async (req, res) => {
    try {
        console.log('In post')

        const newOrder = new Order({
            customerId: mongoose.Types.ObjectId(req.body.customerId),
            productId: mongoose.Types.ObjectId(req.body.productId),
            initialDate: req.body.initiatDate
        });
        console.log('New Order', newOrder);

        const data = await newOrder.save();
        if(data){
            res.status(200).send('Success')
        }
        
    } catch (error) {
        console.log('Error', error);
        res.status(500).send('Internal server error', error)
    }
});

router.get('/:id', async (req, res) => {
    try {
        
        Order.findById(req.params.id)
            .then((order) => {
                if(order){
                    axios.get(`http://localhost:4000/customer/${order.customerId}`)
                    .then((response) => {
                        let orderObject = {
                            CustomerName: response.data.customerName
                        }
                        axios.get(`http://localhost:3000/product/${order.productId}`)
                        .then((response) => {
                            orderObject.ProductName = response.data.productName;
                            orderObject.ProductDetails = response.data.productDetails;

                            console.log(`In order: ${orderObject}`);
                            
                            res.json(orderObject);
                        });
                    });                    
                }
                else{
                    rs.status(404).send('Order not found');
                }
            });
        
    } catch (error) {
        console.log('Error', error);
        res.status(500).send('Internal server error', error)
    }
});

module.exports = router;