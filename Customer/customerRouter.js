const express = require("express")

const router = express.Router()

const customerController = require('./customerController')
const Customer = require("./customerModel")

router.post('/', async (req, res) => {
    try {

        const newCustomer = new Customer({...req.body})
        customerController.saveCustomer(newCustomer, (err, result)=> {
            if(err){
                res.status.apply(400).send({'msg': "Error while saving customer", 'error': err})
            }
            else{
                res.status(200).send(result)
            }
        })
        
    } catch (error) {
        res.status(500).send('Internal server error')
    }
})


router.get('/:id', async (req, res) => {
    try {

        const customerId = req.params.id;

        customerController.getCustomerById(Customer, customerId, (err, result)=> {
            if(err){
                res.status.apply(400).send("Error getting customer", err)
            }
            else{
                res.status(200).send(result)
            }
        })
        
    } catch (error) {
        res.status(500).send('Internal server error')
        console.log(err);
    }
})

module.exports = router;