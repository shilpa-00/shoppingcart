const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
require('dotenv').config()

const UploadRoute=require('./routes/UploadRoute');
const UserRoute=require('./routes/UserRoutes');
const CartRoute=require('./routes/CartRoutes');

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Database connected')
    })

app.use(UploadRoute)
app.use(UserRoute)
app.use(CartRoute)

app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`)
})