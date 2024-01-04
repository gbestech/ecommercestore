
import dotenv from 'dotenv'
import connectDB from './config/db.js'
dotenv.config()
import express from 'express'
import { notFound, errorHandler } from './middleware/errorHandler.js'
import cors from 'cors'
// import Product from './models/productModel.js'
// import products from './data/products.js'
// import asyncHandler from './middleware/asyncHandler.js'
import productRoutes from './routes/productRoutes.js'


const port = process.env.PORT || 5000

connectDB()
const app = express()


app.use(cors())


app.get('/',(req, res)=>{
    res.send('Server is ongoing here')
})


app.use('/api/products', productRoutes)


app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server is running on port ${port}`))