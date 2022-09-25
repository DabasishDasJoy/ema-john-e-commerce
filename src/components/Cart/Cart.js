import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h1>Order summury</h1>
            <h4>Total items: {cart.length}</h4>
        </div>
    );
};

export default Cart;