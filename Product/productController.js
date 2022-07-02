const customerService = require('./productService')

function saveProduct(product, done){
    customerService.saveProduct(product, done)
}


function getProductById(product, productId, done){
    customerService.getProductById(product, productId, done)
}

module.exports = { saveProduct, getProductById }