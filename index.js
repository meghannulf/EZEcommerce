import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './Routes/userRoute.js'
import productRouter from './Routes/productRoute.js'


//App config
const app = express()
const port = process.env.PORT || 4000
//Database config
connectDB()
//Cloudinary config
connectCloudinary()

//Middleware
app.use(cors())
app.use(express.json()) 

//API Endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)


app.get('/', (req, res) =>
   res.send('API is running'))


app.listen(port, () =>
    console.log(`Server is running on port:${port}`))