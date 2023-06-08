import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
    return (
        <div>
            <Link to='/admin/add'>ADD</Link>
            <Link to='/admin/delete'>DELETE</Link>
        </div>
    )
}

export default Admin;