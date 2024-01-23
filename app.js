
import express from "express"
import productRouter from "./routes/products.router.js"
import cartRouter from "./routes/cart.router.js"
import { ProductManager } from './src/productManager.js';
import { CartManager } from './src/CartManager.js'

const PORT = 8080
const  app = express()
const path_Products = "./data/products.json"
const path_Cart = "./data/cart.json"

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

export const productManager = new ProductManager(path_Products);

export const cartManager = new CartManager(path_Cart)



app.use("/api/products", productRouter)
app.use("/api/carts", cartRouter)

app.listen(PORT, (req, res) =>{
    console.log(`Online Server on port ${PORT}`)
})