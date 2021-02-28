import React from 'react';
import Product from '../Product/Product';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total, product) => total + product.price, 0);

    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) 
    {
        totalPrice += cart[i].price;   
    }

    let shippingCost = 0;
    
    if (totalPrice > 0 && totalPrice < 49) 
    {
        shippingCost = 9.99;    
    }
    
    else if (totalPrice > 50 && totalPrice < 99) 
    {
        shippingCost = 4.99;    
    }

    else if (totalPrice > 100) 
    {
        shippingCost = 0;    
    }

    const roundNumber = number => 
    {
        const precision = number.toFixed(2);
        return Number(precision);
    }

    const tax = totalPrice/10;
    const grandTotal = totalPrice + shippingCost + tax;
    
    return (
        <div>
            <h4><u><i>Order Summary</i></u></h4>
            <p>Items ordered: {cart.length}</p>
            <p>Product price: ${roundNumber(totalPrice)}</p>
            <p><small> Tax: ${roundNumber(tax)}</small></p>
            <p><small>Shipping cost: ${shippingCost}</small></p>
            <p>Total price: ${roundNumber(grandTotal)}</p>
            
        </div>
    );
};

export default Cart;