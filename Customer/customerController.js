const customerService = require('./customerService')

function saveCustomer(customer, done){
    customerService.saveCustomer(customer, done)
}


function getCustomerById(customer, customerId, done){
    customerService.getCustomerById(customer, customerId, done)
}

module.exports = { saveCustomer, getCustomerById }