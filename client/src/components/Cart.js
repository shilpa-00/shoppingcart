import React, { useState, useEffect, useContext } from "react";
import { ItemsContext } from "../App";
import Navbar from "./Navbar";
import axios from "axios";
import './Cart.css';

const Cart = () => {
    const { cart, setCart } = useContext(ItemsContext);
    const id = localStorage.getItem('id')
    const token = localStorage.getItem('token')
    const [cost, setCost] = useState(0);
    const [shipping, setShipping] = useState(0);
    useEffect(() => {
        // console.log(id)
        axios.get(`http://localhost:8000/cart/get/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                setCart(res.data)
                // console.log(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [setCart, id, token])
    useEffect(() => {
        let totalCost = 0;
        if (cart.length !== 0) {
            setShipping(20);
        }
        else {
            setShipping(0);
        }
        for (const item of cart) {
            totalCost += item.price * item.quantity;
        }
        // console.log(totalCost)
        setCost(totalCost)
        // return totalCost;
    }, [cart])
    const handleIncrement = (currentItem) => {
        axios.patch(`http://localhost:8000/cart/update/${currentItem.cartId}`, { quantity: currentItem.quantity + 1 }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                const updatedCart = cart.map((item) => {
                    if (item._id === currentItem._id) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });
                setCart(updatedCart);
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleDecrement = (currentItem) => {
        if (currentItem.quantity === 1) {
            axios.delete(`http://localhost:8000/cart/delete/${currentItem.cartId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(res => {
                    const updatedCart = cart.filter((item) => item._id !== currentItem._id);
                    setCart(updatedCart)
                })
                .catch(error => {
                    console.log(error)
                })
        }
        else {
            axios.patch(`http://localhost:8000/cart/update/${currentItem.cartId}`, { quantity: currentItem.quantity - 1 }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(res => {
                    const updatedCart = cart.map((item) => {
                        if (item._id === currentItem._id) {
                            return { ...item, quantity: item.quantity - 1 };
                        }
                        return item;
                    });
                    setCart(updatedCart);
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
    return (
        <div className="cart">
            <Navbar />
            <div className="cart-container">
                <div className="cart-products">
                    <h1>Cart</h1>
                    {
                        cart.map(item => {
                            return (
                                <div className="cart-card" key={item._id}>
                                    <img src={`http://localhost:8000/uploads/${item.image}`} alt="" className="cart-image" />
                                    <div className="cart-data">
                                        <p className="cart-name">{item.name}</p>
                                        <div className="cart-details">
                                            <p>Price</p>
                                            <p>$ {item.price}</p>
                                        </div>
                                        <div className="cart-details">
                                            <div className="quantity-details">
                                                <p>Quantity</p>
                                                <div className="quantity-count">
                                                    <button onClick={() => handleDecrement(item)} className="qbtn">-</button>
                                                    {item.quantity}
                                                    <button onClick={() => handleIncrement(item)} className="qbtn">+</button>
                                                </div>
                                            </div>
                                            <div>
                                                {item.quantity}
                                            </div>
                                        </div>
                                        <div className="cart-details">
                                            <p>---------------------------</p>
                                            <p>-------------</p>
                                        </div>
                                        <div className="cart-details">
                                            <p>Total Price</p>
                                            <p>$ {item.price * item.quantity}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="cart-bill">
                    <h1 className="bill-heading">Bill</h1>
                    <div className="bill-details-container">
                        <div className="bill-details">
                            <p>Total Cost</p>
                            <p>$ {cost}</p>
                        </div>
                        <div className="bill-details">
                            <p>Shipping</p>
                            <p>$ {shipping}</p>
                        </div>
                        <div className="bill-details">
                            <p>----------------</p>
                            <p>----------</p>
                        </div>
                        <div className="bill-details">
                            <p>Total Cost</p>
                            <p>$ {cost + shipping}</p>
                        </div>
                    </div>
                    <div className="bill-footer">
                        <p>Thank You...Happy Shopping</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;