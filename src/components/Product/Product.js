import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, seller, price, ratings, img} = props.product;
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
            <button className='btn-add-to-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;