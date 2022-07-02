require('../dbconfig/dbfile')

async function saveProduct(product, done){
    const data = await product.save()

    done(undefined, data)
}

async function getProductById(product, productId, done){
    const data = await product.findById(productId)

    done(undefined, data)
}

module.exports = {saveProduct, getProductById}