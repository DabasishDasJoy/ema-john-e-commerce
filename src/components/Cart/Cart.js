import React from 'react';
import "./Cart.css";

const Cart = ({cart}) => {
    //calculate total price
    const total = cart.reduce((prev, curr) => prev + curr.price * curr.quantity ,0);
    //calculate total shipping charge
    const totalShippingCharge = cart.reduce((prev, curr) => prev + curr.shipping, 0);

    //Total tax
    const totalTax = cart.reduce((prev, curr)=> prev + curr.price * 0.1, 0);

    //grand total
    const grandTotal = total + totalShippingCharge + parseFloat((totalTax).toFixed(2));

    const quantity = cart.reduce((prev, curr) => prev + curr.quantity, 0);
    return (
        <div className='cart'>
            <div className='cart-title'>
                <h4>Order Summury</h4>
            </div>
            <div className='cart-calculation'>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charges: ${totalShippingCharge}</p>
                <p>Tax: ${parseFloat(totalTax).toFixed(2)}</p>
                <h4>Grand Total: {grandTotal}</h4>
            </div>
        </div>
    );
};

export default Cart;