const customerDao = require("./customerDAO")

function saveCustomer(Customer, done){
    customerDao.saveCustomer(Customer, done)
}

function getCustomerById(Customer, customerId, done){
    customerDao.getCustomerById(Customer, customerId, done)
}

module.exports = { saveCustomer, getCustomerById }