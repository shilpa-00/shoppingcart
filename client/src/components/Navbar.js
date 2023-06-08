import React, { useContext } from "react";
import './Navbar.css';
import home from '../assets/home.png';
import { useNavigate } from "react-router";
import { ItemsContext } from "../App";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const { items, setSearch, term, setTerm } = useContext(ItemsContext);
    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate(`/${path}`)
    }
    const handleSubmit = () => {
        if(term===''){
            toast.warn('Empty Search Field!', {
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
        else{
            const itemslist = items.filter(item => item.name.toLowerCase().includes(term.toLowerCase()))
            console.log(itemslist)
            setSearch(itemslist)
            if (itemslist.length === 0) {
                toast.warn('No Such Products!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    })
                setTerm('');
            }
        }
    }
    const handleLogout=()=>{
        navigate('/');
        localStorage.removeItem('id')
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }
    // useEffect(() => {
    //     console.log(search)
    // }, [search])
    return (
        <div className="navbar-container">
            <img src={home} alt="Home" className="img" />
            <ToastContainer/>
            <div className="search-bar">
                <input type="text" placeholder="Search Items" className="inp" value={term} onChange={e => setTerm(e.target.value)} />
                <button className="btn" onClick={handleSubmit}>Search</button>
            </div>
            <div className="nav-items">
                <button onClick={() => handleClick('home')} className="nav-btn">HOME</button>
                <button onClick={() => handleClick('cart')} className="nav-btn">CART</button>
                <button onClick={() => handleClick('about')} className="nav-btn">ABOUT</button>
                <button onClick={() => handleClick('contact')} className="nav-btn">CONTACT</button>
                <button onClick={handleLogout} className="nav-btn">LOGOUT</button>
            </div>
        </div>
    )
}

export default Navbar;