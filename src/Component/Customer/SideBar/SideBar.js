import React from 'react';
import logo from '../../../images/logos/logo.png';
const SideBar = () => {
    return (
        <div className="ml-2 mt-5">
            <img className="logo" src={logo} alt=""/>
            <button className="mt-3 btn-brand">Order</button>
            <button className="mt-3 btn-brand">Order Status</button>
            <button className="mt-3 btn-brand">Review</button>    
        </div>
    );
};

export default SideBar;