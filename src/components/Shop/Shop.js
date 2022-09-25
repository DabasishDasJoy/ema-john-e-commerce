import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    //state controller
    //useState hook returns array
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    //Handler for lower level component product then pass it where it need
    const handleAddToCart = (selectedProduct) => {
        //Change state on every click

        //Copy the cart's data and add clicked one since state is immutable
        let newCart = [];
        const exist = cart.find(product => product.id === selectedProduct.id);
        if(exist){
            const rest = cart.filter(product => product.id !== exist.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        else{
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    //Fetch data
    useEffect(() => {
        
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
        
    }, []);

    //previous cart
    useEffect(() =>{
        const storedCart = getStoredCart();
        const newCart = [];
        for (const id in storedCart) {
            const savedCart = products.find(product => product.id === id);
            if(savedCart){
                savedCart.quantity = storedCart[id];
                newCart.push(savedCart);
            }
        }
        setCart(newCart);
    }, [products])
    
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