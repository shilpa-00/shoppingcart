const mongoose=require('mongoose');

const CartSchema=new mongoose.Schema({
    userId:{
        type: Object,
        required: true
    },
    productId:{
        type: Object,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    }
},{timestamps: true});

module.exports=mongoose.model('Cart',CartSchema);