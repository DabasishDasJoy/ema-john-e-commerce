import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';
const Product = ({handleAddToCart, product, product:{name, seller, price, ratings, img}}) => {
    
    return (
        <div className='product-card'>
            <img src={img} alt="" />
            <div className='card-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <div className='production-info'>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings} stars</p>
                </div>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-add-to-cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;