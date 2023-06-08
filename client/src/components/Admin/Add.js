import React, { useState } from "react";
import axios from "axios";

const Add = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [brand, setBrand] = useState('');
    const [image, setImage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('brand', brand);
        formData.append('image', image);
        axios.post('http://localhost:8000/product/save', formData)
            .then(res => {
                // console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleChange = e => {
        setImage(e.target.files[0]);
    }
    return (
        <div className='admin-container'>
            Name: <input type='text' value={name} onChange={e => setName(e.target.value)} />
            Price: <input type='number' value={price} onChange={e => setPrice(e.target.value)} />
            Brand: <input type='text' value={brand} onChange={e => setBrand(e.target.value)} />
            Image: <input type='file' onChange={e => handleChange(e)} />
            <button onClick={handleSubmit}>ADD</button>
        </div>
    )
}

export default Add;