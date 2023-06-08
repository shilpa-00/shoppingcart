const { Router } = require('express');
const uploadMiddleware = require('../middlewares/MulterMiddleware');
const UploadModel = require('../models/UploadModel');
const verifyToken = require('../middlewares/VerifyToken')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const router = Router();

router.get('/product/get', verifyToken, async (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, async (error, authData)=>{
        if(error){
            res.sendStatus(403);
        }
        else{
            const data = await UploadModel.find().sort({ createdAt: 'descending' });
            res.send(data)
        }
    })
})

router.post('/product/save', uploadMiddleware.single('image'), (req, res) => {
    const name = req.body.name;
    const brand = req.body.brand;
    const price = req.body.price;
    const image = req.file.filename;
    // console.log(image);
    UploadModel.create({ name, price, brand, image })
        .then(data => {
            // console.log(data);
            res.send(data);
        })
        .catch(error => {
            console.log(error);
            res.send(error);
        })
})

module.exports = router;