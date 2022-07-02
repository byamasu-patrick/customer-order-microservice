const productDao = require('./productDAO')

function saveProduct(Product, done){
    productDao.saveProduct(Product, done)
}


function getProductById(Product, productId, done){
    productDao.getProductById(Product, productId, done)
}

module.exports = { saveProduct, getProductById }