import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';



const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    const handleAddProduct = (product) => 
    {
        console.log("product added", product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="ShopContainer">
            <div className="ProductContainer">
                {
                    products.map(product => 
                    <Product 
                        handleAddProduct = {handleAddProduct}
                        product={product}
                    >
                    </Product>)
                }
            </div>

            <div className="CartContainer">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;