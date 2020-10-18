import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart, faLock, faKeyboard,  } from '@fortawesome/free-solid-svg-icons';

import './SideBar.css';

const SideBar = () => {
    return (
    
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/order" className="text-white">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/service" className="text-white">
                        <FontAwesomeIcon icon={faLock} /> <span>service list</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faKeyboard} /> <span>review</span>
                    </Link>
                </li>
                </ul>
                    
        </div>
    );
};

export default SideBar;