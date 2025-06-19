import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoutes.js'
import productRouter from './routes/productRoutes.js'
import cartRouter from './routes/cartRoutes.js'
import orderRouter from './routes/orderRoutes.js'


//App Config
const app= express()
const port= process.env.PORT || 4000
connectDB()
connectCloudinary()


//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(cors())


// API endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res)=>{
  res.send("hello");
})


// Listening
app.listen(port, ()=>{
  console.log("Server started on PORT : "+ port);
})