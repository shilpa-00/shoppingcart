const { Router } = require('express');
const CartModel = require('../models/CartModel');
const UploadModel = require('../models/UploadModel');

const router = Router();

//This API fetches products from PRODUCT table where product._id==productId for each of the product in CART table of a particular user
router.get('/cart/get/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const results = await CartModel.find({ userId: userId })
        // console.log(results)
        const result = []
        for(const r of results){
            const temp=await UploadModel.findOne({_id:r.productId})
            const item={_id:temp._id,cartId:r._id,name:temp.name,price:temp.price,brand:temp.brand,image:temp.image,quantity:r.quantity}
            // console.log(item)
            result.push(item)
        }
        // console.log(result)
        res.send(result)
    }
    catch (error) {
        res.send(error)
    }
})

router.post('/cart/add', async (req, res) => {
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
})

router.patch('/cart/update/:id',async(req,res)=>{
    try{
        const result=await CartModel.findByIdAndUpdate(req.params.id,req.body)
        res.send(result)
    }
    catch(error){
        res.send(error)
    }
})

router.delete('/cart/delete/:id',async(req,res)=>{
    try{
        const result=await CartModel.findByIdAndDelete(req.params.id)
        res.send(result)
    }
    catch(error){
        res.send(error)
    }
})

module.exports = router;