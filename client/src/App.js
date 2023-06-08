import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Admin from './components/Admin/Admin';
import Add from './components/Admin/Add';
import Delete from './components/Admin/Delete';

const ItemsContext = React.createContext();

function App() {
  const [id, setId] = useState('');
  const [user, setUser] = useState('');
  const [token, setToken] = useState('');
  const [term, setTerm] = useState('');
  const [cart, setCart] = useState([])
  const [currentCart, setCurrentCart] = useState([])
  const [search, setSearch] = useState([])
  const [items, setItems] = useState([]);
  return (
    <ItemsContext.Provider value={{ id, setId, user, setUser, token, setToken, items, setItems, cart, setCart, currentCart, setCurrentCart, search, setSearch, term, setTerm }}>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/admin/add' element={<Add />} />
          <Route path='/admin/delete' element={<Delete />} />
        </Routes>
      </Router>
    </ItemsContext.Provider>
  );
}

export default App;
export { ItemsContext };