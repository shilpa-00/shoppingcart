import React, { useEffect, useContext } from "react";
import { ItemsContext } from "../App";
import Navbar from "./Navbar";
import axios from "axios";
import './Home.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const { items, setItems, cart, search, setSearch, setTerm } = useContext(ItemsContext);
    const id = localStorage.getItem('id')
    const token = localStorage.getItem('token')
    useEffect(() => {
        const t = localStorage.getItem('token')
        axios.get('http://localhost:8000/product/get', {
            headers: {
                'Authorization': `Bearer ${t}`
            }
        })
            .then(res => {
                setItems(res.data);
                // console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [setItems]);
    const handleSubmit = (item) => {
        const isItemInCart = cart.some((cartItem) => cartItem._id === item._id);
        if (isItemInCart) {
            toast.warn('Product already added', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
        else {
            axios.post('http://localhost:8000/cart/add', { productId: item._id, userId: id, quantity: 1 }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(res => {
                    toast.success('Product added to cart successfully', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    })
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
    const handleClear = () => {
        setSearch([]);
        setTerm('');
    }
    // useEffect(()=>{
    //     console.log(cart);
    // },[cart])
    return (
        <div className="home">
            <ToastContainer />
            <Navbar />
            {search.length === 0 ? (
                <div className="home-container">
                    <h1>Products</h1>
                    <div className="card-container">
                        {
                            items.map(item => {
                                return (
                                    <div key={item._id} className="item-card">
                                        <img src={`http://localhost:8000/uploads/${item.image}`} alt={item.name} className="item-img" />
                                        <p className="item-name">{item.name}</p>
                                        <div className="item-details">
                                            <p>{item.brand}</p>
                                            <p>{item.price}$</p>
                                        </div>
                                        <button className="add-to-cart" onClick={() => handleSubmit(item)}>ADD TO CART</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            ) : (
                <div className="home-container">
                    <div className="heading">
                        <h1>Results</h1>
                        <button className="clear" onClick={handleClear}>Clear</button>
                    </div>
                    <div className="card-container">
                        {
                            search.map(item => {
                                return (
                                    <div key={item._id} className="item-card">
                                        <img src={`http://localhost:8000/uploads/${item.image}`} alt='' className="item-img" />
                                        <p className="item-name">{item.name}</p>
                                        <div className="item-details">
                                            <p>{item.brand}</p>
                                            <p>{item.price}$</p>
                                        </div>
                                        <button className="add-to-cart" onClick={() => handleSubmit(item)}>ADD TO CART</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
            }
        </div>
    )
}

export default Home;