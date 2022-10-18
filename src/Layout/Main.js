import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <nav>
                <Link to='/login'>Login</Link>
                <Link to='/Register'>Register</Link>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;