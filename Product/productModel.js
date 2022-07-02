const mongoose = require("mongoose")
const productSchema = mongoose.Schema(
    {
        productName: {
            type: String,
            require: true
        },
        productId: {
            type: String,
            require: true
        },
        productDetails: {
            type: String,
            require: false
        }
    }
)

const Product = mongoose.model('product', productSchema)
module.exports = Product;