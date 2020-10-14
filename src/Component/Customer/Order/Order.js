import React from 'react';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import SideBar from '../SideBar/SideBar';

const Order = () => {
    return (
        <section className="row ">
            <div className="col-md-3 mb-4">
                <SideBar></SideBar>
            </div>
            <div className="col-md-9">
                <PlaceOrder></PlaceOrder>

            </div>
        </section>
    );
};

export default Order;