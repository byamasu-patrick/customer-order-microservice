const express = require("express")

const app = express()
const prodRouter = require("./productRouter")

app.use(express.json())

app.use('/product', prodRouter)

app.listen(3000, () => {
    console.log("Listening...");
})