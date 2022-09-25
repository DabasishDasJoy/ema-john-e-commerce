import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    //state controller
    //useState hook returns array
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    //Handler for lower level component product then pass it where it need
    const handleAddToCart = (product) => {
        //Change state on every click

        //Copy the cart's data and add clicked one since state is immutable
        const newCart = [...cart, product];
        setCart(newCart);
    }
    //Fetch data
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;