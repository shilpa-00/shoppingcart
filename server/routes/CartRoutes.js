const { Router } = require('express');
const CartModel = require('../models/CartModel');
const UploadModel = require('../models/UploadModel');
const verifyToken = require('../middlewares/VerifyToken')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const router = Router();

//This API fetches products from PRODUCT table where product._id==productId for each of the product in CART table of a particular user
router.get('/cart/get/:id', verifyToken, async (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, async (error, authData) => {
        if (error) {
            res.sendStatus(403);
        }
        else {
            const userId = req.params.id;
            try {
                const results = await CartModel.find({ userId: userId })
                // console.log(results)
                const result = []
                for (const r of results) {
                    const temp = await UploadModel.findOne({ _id: r.productId })
                    const item = { _id: temp._id, cartId: r._id, name: temp.name, price: temp.price, brand: temp.brand, image: temp.image, quantity: r.quantity }
                    // console.log(item)
                    result.push(item)
                }
                // console.log(result)
                res.send(result)
            }
            catch (error) {
                res.send(error)
            }
        }
    })
})

router.post('/cart/add', verifyToken, async (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, async (error, authData) => {
        if (error) {
            res.sendStatus(403);
        }
        else {
            // console.log(req.body)
            const cartItem = new CartModel({
                productId: req.body.productId,
                userId: req.body.userId,
                quantity: req.body.quantity
            })
            try {
                const result = await cartItem.save()
                res.send(result);
            }
            catch (error) {
                res.send(error)
            }
        }
    })
})

router.patch('/cart/update/:id', verifyToken, async (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, async (error, authData) => {
        if (error) {
            res.sendStatus(403);
        }
        else {
            try {
                const result = await CartModel.findByIdAndUpdate(req.params.id, req.body)
                res.send(result)
            }
            catch (error) {
                res.send(error)
            }
        }
    })
})

router.delete('/cart/delete/:id', verifyToken, async (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, async (error, authData) => {
        if (error) {
            res.sendStatus(403);
        }
        else {
            try {
                const result = await CartModel.findByIdAndDelete(req.params.id)
                res.send(result)
            }
            catch (error) {
                res.send(error)
            }
        }
    })
})

module.exports = router;